import { create } from "zustand";

export const usePoseStore = create((set, get) => ({
  poses: [
    {
      id: "1",
      name: "Warrior II",
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
        "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
      angles: {
        left_knee_angle: [80, 100],
        left_elbow_angle: [160, 180],
        right_elbow_angle: [160, 180],
      },
    },
    {
      id: "2",
      name: "Tree Pose",
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
        "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg",
      angles: {
        left_knee_angle: [30, 70],
        right_knee_angle: [160, 180],
      },
    },
    {
      id: "3",
      name: "Cobra Pose",
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
        "https://images.pexels.com/photos/6698513/pexels-photo-6698513.jpeg",
      angles: {
        shoulder_angle: [150, 180],
        elbow_angle: [160, 180],
      },
    },
    {
      id: "4",
      name: "Bow Pose",
      category: "Prone",
      description: "An intermediate backbend that opens the front of the body.",
      difficulty: "intermediate",
      instructions: [
        "Lie on your stomach with arms alongside body",
        "Bend knees and hold ankles with hands",
        "Inhale and lift chest and thighs off floor",
        "Look forward and keep breathing normally",
        "Hold for 20-30 seconds, then exhale and release",
      ],
      benefits: [
        "Stretches the entire front of the body",
        "Strengthens the back muscles",
        "Improves posture and spinal flexibility",
        "Stimulates the digestive organs",
      ],
      imageUrl:
        "https://images.pexels.com/photos/6787207/pexels-photo-6787207.jpeg",
      angles: {
        shoulder_angle: [120, 150],
        knee_angle: [40, 80],
      },
    },
    {
      id: "5",
      name: "Cow Face Arms",
      category: "Seated",
      description:
        "A seated pose that deeply stretches the shoulders and chest.",
      difficulty: "intermediate",
      instructions: [
        "Sit comfortably with spine straight",
        "Raise right arm, bend elbow to reach behind head",
        "Bring left arm behind back to clasp right hand",
        "Keep shoulders relaxed and chest open",
        "Hold for 30 seconds, then switch sides",
      ],
      benefits: [
        "Stretches shoulders, chest, and upper back",
        "Improves posture and spinal alignment",
        "Increases range of motion in the shoulders",
        "Relieves tension in the upper body",
      ],
      imageUrl:
        "https://images.pexels.com/photos/6787401/pexels-photo-6787401.jpeg",
      angles: {
        right_elbow_angle: [70, 100],
        left_elbow_angle: [70, 100],
      },
    },
    {
      id: "6",
      name: "Siddhasana (Adept's Pose)",
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
        "https://images.pexels.com/photos/6698978/pexels-photo-6698978.jpeg",
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
