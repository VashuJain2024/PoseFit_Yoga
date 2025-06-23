import * as poseDetection from "@tensorflow-models/pose-detection";
import * as tf from "@tensorflow/tfjs";
import { useRef, useEffect, useContext, useState, useCallback, useMemo } from "react";
import YogaContext from "../../YogaContext";
import { POINTS, keypointConnections } from "../../utils/data";
import { drawPoint, drawSegment } from "../../utils/helper";
import Webcam from "react-webcam";
import { count } from "../../utils/music";
import { Link, useNavigate } from "react-router-dom";
import "./Yoga.css";
import "./YogaCanvas.css";
import { usePoseStore } from '../../store/poseStore';

let flag = false;
let skeletonColor = "rgb(255,0,0)";
let interval;

// ✅ Final clean component export
export default function YogaCanvas() {
  const navigate = useNavigate();
  const [isModelReady, setIsModelReady] = useState(false);
  const {
    stopPose,
    isStartPose,
    startingTime,
    startingTimefunc,
    currentTime,
    currentTimefunc,
    poseTimefunc,
    poseTime,
    bestPerform,
    bestPerformfunc,
    currentPose,
  } = useContext(YogaContext);
  const { poses } = usePoseStore();
  const pose = poses.filter(pose => pose.name === currentPose);

  const CLASS_NO = useMemo(() => ({
    Chair: 0,
    Cobra: 1,
    Dog: 2,
    No_Pose: 3,
    Shoulderstand: 4,
    Traingle: 5,
    Tree: 6,
    Warrior: 7,
  }), []);

  useEffect(() => {
    const timeDiff = (currentTime - startingTime) / 1000;
    if (flag) poseTimefunc(timeDiff);
    if (timeDiff > bestPerform) bestPerformfunc(timeDiff);
  }, [currentTime, startingTime, bestPerform, poseTimefunc, bestPerformfunc]);

  useEffect(() => {
    currentTimefunc(0);
    poseTimefunc(0);
    bestPerformfunc(0);
  }, [currentPose, currentTimefunc, poseTimefunc, bestPerformfunc]);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const get_center_point = useCallback((landmarks, left, right) => {
    const l = tf.gather(landmarks, left, 1);
    const r = tf.gather(landmarks, right, 1);
    return tf.add(tf.mul(l, 0.5), tf.mul(r, 0.5));
  }, []);

  const get_pose_size = useCallback((landmarks, multiplier = 2.5) => {
    const hips_center = get_center_point(landmarks, POINTS.LEFT_HIP, POINTS.RIGHT_HIP);
    const shoulders_center = get_center_point(landmarks, POINTS.LEFT_SHOULDER, POINTS.RIGHT_SHOULDER);
    const torso_size = tf.norm(tf.sub(shoulders_center, hips_center));
    let pose_center = get_center_point(landmarks, POINTS.LEFT_HIP, POINTS.RIGHT_HIP);
    pose_center = tf.expandDims(pose_center, 1);
    pose_center = tf.broadcastTo(pose_center, [1, 17, 2]);
    const d = tf.gather(tf.sub(landmarks, pose_center), 0, 0);
    return tf.maximum(tf.mul(torso_size, multiplier), tf.max(tf.norm(d, "euclidean", 0)));
  }, [get_center_point]);

  const normalize_pose_landmarks = useCallback((landmarks) => {
    let pose_center = get_center_point(landmarks, POINTS.LEFT_HIP, POINTS.RIGHT_HIP);
    pose_center = tf.expandDims(pose_center, 1);
    pose_center = tf.broadcastTo(pose_center, [1, 17, 2]);
    landmarks = tf.sub(landmarks, pose_center);
    const pose_size = get_pose_size(landmarks);
    return tf.div(landmarks, pose_size);
  }, [get_center_point, get_pose_size]);

  const landmarks_to_embedding = useCallback((landmarks) => {
    const normalized = normalize_pose_landmarks(tf.expandDims(landmarks, 0));
    return tf.reshape(normalized, [1, 34]);
  }, [normalize_pose_landmarks]);

  const detectPose = useCallback(async (detector, poseClassifier, countAudio) => {
    if (webcamRef.current && webcamRef.current.video.readyState === 4) {
      let notDetected = 0;
      const video = webcamRef.current.video;
      const pose = await detector.estimatePoses(video);
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      try {
        const keypoints = pose[0].keypoints;
        const input = keypoints.map((keypoint) => {
          if (keypoint.score > 0.4 && !["left_eye", "right_eye"].includes(keypoint.name)) {
            drawPoint(ctx, keypoint.x, keypoint.y, 8, "rgb(255,255,255)");
            keypointConnections[keypoint.name]?.forEach((connection) => {
              const conName = connection.toUpperCase();
              drawSegment(
                ctx,
                [keypoint.x, keypoint.y],
                [keypoints[POINTS[conName]].x, keypoints[POINTS[conName]].y],
                skeletonColor
              );
            });
          } else {
            notDetected++;
          }
          return [keypoint.x, keypoint.y];
        });

        if (notDetected > 4) {
          skeletonColor = "rgb(255,0,0)";
          return;
        }

        const processedInput = landmarks_to_embedding(input);
        const classification = poseClassifier.predict(processedInput);

        classification.array().then((data) => {
          const classNo = CLASS_NO[currentPose];
          if (data[0][classNo] > 0.97) {
            if (!flag) {
              countAudio.play();
              startingTimefunc(Date.now());
              flag = true;
            }
            currentTimefunc(Date.now());
            skeletonColor = "rgb(0,255,0)";
          } else {
            flag = false;
            skeletonColor = "rgb(255,0,0)";
            countAudio.pause();
            countAudio.currentTime = 0;
          }
        });
      } catch (err) {
        console.error(err);
      }
    }
  }, [CLASS_NO, currentPose, currentTimefunc, startingTimefunc, landmarks_to_embedding]);

  useEffect(() => {
    let detector, poseClassifier;
    const loadModels = async () => {
      const detectorConfig = {
        modelType: poseDetection.movenet.modelType.SINGLEPOSE_THUNDER,
      };
      detector = await poseDetection.createDetector(
        poseDetection.SupportedModels.MoveNet,
        detectorConfig
      );
      poseClassifier = await tf.loadLayersModel(
        "https://models.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
      );
      const countAudio = new Audio(count);
      countAudio.loop = true;

      setIsModelReady(true);
      interval = setInterval(() => {
        detectPose(detector, poseClassifier, countAudio);
      }, 100);
    };

    if (isStartPose) loadModels();
    return () => clearInterval(interval);
  }, [isStartPose, detectPose]);

  useEffect(() => {
    if (!isStartPose) navigate("/practice");
  }, [isStartPose, navigate]);

  const width = window.screen.width;

  if (!isStartPose) return null;

  return (
    <div className="yoga-pose-container">
      <div className="performance-container">
        <div className="pose-performance">
          <h4>Pose Time : {poseTime} s</h4>
        </div>
        <div className="pose-performance">
          <h4>Best Time : {bestPerform} s</h4>
        </div>
        <button onClick={stopPose} className="secondary-btn">
          <Link
            to="/practice"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-[15px] transition-all duration-300 ease-in-out font-medium bg-transparent text-white border hover:bg-transparent hover:text-black hover:border border-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Stop Pose
          </Link>
        </button>
      </div>

      <div className="pose-detection">
        <div className="detection-container">
          {isModelReady ? (
            <>
              <Webcam
                width={width >= 480 ? "640px" : "360px"}
                height={width >= 480 ? "480px" : "270px"}
                id="webcam"
                className="webcam"
                ref={webcamRef}
              />
              <canvas
                ref={canvasRef}
                id="my-canvas"
                className="my-canvas"
                width={width >= 480 ? "640px" : "360px"}
                height={width >= 480 ? "480px" : "270px"}
              />
            </>
          ) : (
            <div className="loading-wrapper">
              <p className="loading-text">Loading model<span className="dot-flash">...</span></p>
            </div>
          )}
        </div>
        <div className="pose-img">
          <img src={pose[0].imageUrl} alt={pose[0].name} />
        </div>
      </div>
    </div>
  );
}
