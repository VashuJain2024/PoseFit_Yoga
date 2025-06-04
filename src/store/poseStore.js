import { create } from "zustand";

export const usePoseStore = create((set, get) => ({
  poses: [
    {
      id: "1",
      name: "Tree",
      category: "Standing",
      description: "A balancing pose that improves focus and stability.",
      difficulty: "beginner",
      instructions: [
        "Stand tall with feet together",
        "Shift weight to left leg, bend right knee",
        "Place right foot on inner left thigh or calf",
        "Bring hands to prayer position at chest",
        "Hold for 30 seconds, then switch sides",
      ],
      benefits: [
        "Improves balance and stability",
        "Strengthens thighs, calves, ankles, and spine",
        "Stretches the groin, inner thighs, chest, and shoulders",
        "Enhances concentration and focus",
      ],
      imageUrl:
        "https://media.istockphoto.com/id/924163542/photo/young-woman-doing-vrksasana-exercise.jpg?s=612x612&w=0&k=20&c=7nestfhHvnOZsXm_a1vf9x1V3JT_llP7zlvp7isKHVw=",
      angles: {
        left_knee_angle: [30, 70],
        right_knee_angle: [160, 180],
      },
    },
    {
      id: "2",
      name: "Chair",
      category: "Standing",
      description: "A powerful standing pose that builds strength and stamina in the lower body while enhancing balance and focus.",
      difficulty: "intermediate",
      instructions: [
        "Stand straight with feet together and arms at your sides",
        "Inhale and raise your arms overhead, keeping them parallel or palms together",
        "Exhale and bend your knees, lowering your hips as if sitting in a chair",
        "Keep your back straight and chest lifted",
        "Hold the pose for 20-30 seconds while breathing steadily, then slowly rise back up"
      ],
      benefits: [
        "Strengthens thighs, calves, and spine",
        "Tones the shoulders and arms",
        "Improves balance and stability",
        "Stimulates the heart and diaphragm"],
      imageUrl:
        "https://www.yogadownload.com/portals/0/ProductImages/Pose-Pictures/Chair-NEW.jpg",
      angles: {
        shoulder_angle: [120, 150],
        knee_angle: [40, 80],
      },
    },
    {
      id: "3",
      name: "Cobra",
      category: "Prone",
      description:
        "A gentle backbend that opens the chest and strengthens the spine.",
      difficulty: "beginner",
      instructions: [
        "Lie on your stomach with legs extended",
        "Place hands under shoulders, elbows close to body",
        "Inhale and lift your chest upward",
        "Keep shoulders relaxed away from ears",
        "Hold for 15-30 seconds, then exhale and release",
      ],
      benefits: [
        "Strengthens the spine",
        "Opens chest and lungs",
        "Stimulates abdominal organs",
        "Relieves stress and fatigue",
      ],
      imageUrl:
        "https://img.freepik.com/free-photo/sporty-young-woman-doing-yoga-practice-isolated-white-background-concept-healthy-life-natural-balance-body-mental-development_231208-8247.jpg",
      angles: {
        shoulder_angle: [150, 180],
        elbow_angle: [160, 180],
      },
    },
    {
      id: "4",
      name: "Warrior",
      category: "Standing",
      description:
        "A powerful standing pose that builds strength and stability.",
      difficulty: "beginner",
      instructions: [
        "Stand with feet wide apart",
        "Turn right foot out 90 degrees, left foot slightly in",
        "Bend right knee over right ankle",
        "Extend arms parallel to floor, palms down",
        "Gaze over right hand, hold for 30 seconds",
      ],
      benefits: [
        "Strengthens legs, ankles, and feet",
        "Opens hips and chest",
        "Improves concentration and balance",
        "Stimulates abdominal organs",
      ],
      imageUrl:
        "https://img.freepik.com/free-photo/young-woman-meditating-with-chakras-her-body_23-2149163323.jpg",
      angles: {
        left_knee_angle: [80, 100],
        left_elbow_angle: [160, 180],
        right_elbow_angle: [160, 180],
      },
    },
    {
      id: "5",
      name: "Downward",
      category: "Standing",
      description: "A foundational yoga pose that strengthens the entire body and stretches the back, legs, and arms.",
      difficulty: "intermediate",
      instructions: [
        "Start on your hands and knees in a tabletop position",
        "Spread your fingers wide and tuck your toes under",
        "Exhale and lift your hips up and back, straightening your legs",
        "Press your heels toward the floor and keep your head between your arms",
        "Hold for 30 seconds to 1 minute while breathing deeply"
      ],
      benefits: [
        "Stretches the hamstrings, calves, and spine",
        "Strengthens the arms, shoulders, and legs",
        "Improves circulation and energizes the body",
        "Calms the mind and relieves stress"],
      imageUrl:
        "https://cdn.create.vista.com/api/media/medium/468524316/stock-photo-side-view-woman-standing-downward-facing-dog-yoga-pose?token=",
      angles: {
        right_elbow_angle: [70, 100],
        left_elbow_angle: [70, 100],
      },
    },
    {
      id: "6",
      name: "Shoulderstand",
      category: "Inversion",
      description: "An advanced inversion that calms the mind and improves circulation.",
      difficulty: "advanced",
      instructions: [
        "Lie on your back, lift legs over head into Plow pose",
        "Support lower back with hands",
        "Lift legs up straight toward the ceiling",
        "Keep neck relaxed, hold for 30 seconds",
      ],
      benefits: [
        "Stimulates thyroid and parathyroid glands",
        "Improves digestion and circulation",
        "Reduces fatigue and calms the mind",
        "Tones legs and abs",
      ],
      imageUrl: "https://media.yogauonline.com/app/uploads/2022/04/06031927/0-How-to-practice-Shoulderstand-for-comfort-and-safety-1.webp",
      angles: {
        neck_angle: [70, 100],
        hip_angle: [80, 100],
        knee_angle: [160, 180],
      },
    },
    {
      id: "7",
      name: "Triangle",
      category: "Standing",
      description: "A standing pose that stretches the legs and torso while improving balance and stability.",
      difficulty: "beginner",
      instructions: [
        "Stand with feet wide apart, about 3-4 feet",
        "Turn your right foot out 90 degrees and left foot slightly inward",
        "Extend your arms parallel to the floor, palms facing down",
        "Inhale, then exhale and reach your right hand toward your right foot",
        "Place your right hand on your shin, ankle, or the floor, and stretch your left arm toward the ceiling",
        "Gaze up at your left hand and hold for 30 seconds, then switch sides"
      ],
      benefits: [
        "Stretches the hamstrings, hips, and spine",
        "Strengthens the legs, knees, and ankles",
        "Improves balance and stability",
        "Stimulates digestion and relieves stress"
      ],
      imageUrl:
        "https://cdn.prod.website-files.com/61384703bca2db472ca04cfa/63118603949700f63f2e9418_parivrtta-trikonasana-revolved-triangle-pose.jpg",
      angles: {
        left_knee_angle: [70, 120],
        right_knee_angle: [70, 120],
        torso_angle: [80, 100],
      },
    },
    {
      id: "8",
      name: "Siddhasana",
      category: "Seated",
      description: "A comfortable seated meditation pose.",
      difficulty: "beginner",
      instructions: [
        "Sit with legs extended",
        "Bend left knee, place heel near perineum",
        "Bend right knee, place heel over left ankle",
        "Keep spine straight, hands on knees",
        "Close eyes and breathe deeply",
      ],
      benefits: [
        "Calms the mind and reduces anxiety",
        "Improves concentration and focus",
        "Stretches the knees and ankles",
        "Ideal for meditation practice",
      ],
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/575eb5f0b654f9dd886d678c/1615131226110-P3J4J8KPGB2DAOJLXY0E/siddhasana.jpg?format=2500w",
      angles: {
        left_knee_angle: [70, 120],
        right_knee_angle: [70, 120],
        torso_angle: [80, 100],
      },
    },
    {
      id: "9",
      name: "Fish",
      category: "Supine",
      description: "A gentle backbend that opens the chest and throat while relieving tension in the neck and shoulders.",
      difficulty: "beginner",
      instructions: [
        "Lie on your back with legs extended and arms at your sides",
        "Slide your hands under your hips, palms facing down",
        "Press your elbows into the floor and lift your chest upward",
        "Gently tilt your head back so the crown rests lightly on the floor",
        "Hold for 30 seconds to 1 minute while breathing deeply, then slowly release"
      ],
      benefits: [
        "Opens the chest, throat, and abdomen",
        "Relieves tension in the neck and shoulders",
        "Improves posture and spinal flexibility",
        "Stimulates the throat and thyroid gland"
      ],
      imageUrl:
        "https://media.graphassets.com/resize=fit:clip,height:350,width:600/JouBjfmzTVKCjsaevxPj",
      angles: {
        left_knee_angle: [70, 120],
        right_knee_angle: [70, 120],
        torso_angle: [80, 100],
      },
    },
  ],

  selectedPose: null,
  isDetecting: false,
  feedback: {},

  selectPose: (id) => {
    const pose = get().poses.find((p) => p.id === id) || null;
    set({ selectedPose: pose });
  },

  setIsDetecting: (value) => {
    set({ isDetecting: value });
  },

  setFeedback: (feedback) => {
    set({ feedback });
  },
}));
