import { motion } from "framer-motion";

function SkillsPage() {
  const skillCategories = [
    {
      title: "Deep Learning",
      skills: [
        "PyTorch",
        "Model Training",
        "Transfer Learning",
        "YOLO Optimization",
        "TensorRT",
        "DeepStream SDK",
        "ONNX"
      ]
    },
    {
      title: "Computer Vision",
      skills: [
        "OpenCV",
        "Object Detection",
        "Image Processing",
        "Face Detection",
        "Pose Estimation",
        "Video Analytics",
        "Multi-Stream Processing"
      ]
    },
    {
      title: "Edge AI Deployment",
      skills: [
        "NVIDIA Jetson",
        "JetPack",
        "CUDA",
        "TensorRT Optimization",
        "INT8 / FP16 Quantization",
        "Real-Time Inference",
        "RTSP Video Pipelines"
      ]
    },
    {
      title: "MLOps & DevOps",
      skills: [
        "Docker",
        "Containerization",
        "Model Deployment",
        "CI/CD Concepts",
        "Linux",
        "Git",
        "GitHub"
      ]
    },
    {
      title: "Tools & Build Systems",
      skills: [
        "CMake",
        "GStreamer",
        "DeepStream Pipeline Development",
        "Python",
        "Bash",
        "Debugging & Profiling"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
  };

  const skillContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.04 }
    }
  };

  const skillContentItem = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <>
      <h2 className="section-title">Skills & Expertise</h2>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, idx) => (
          <motion.div key={idx} className="skill-category" variants={itemVariants}>
            <motion.div variants={skillContentVariants}>
              <motion.h3 className="category-title" variants={skillContentItem}>{category.title}</motion.h3>
              <motion.div className="skill-tags" variants={skillContentItem}>
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-tag"
                    variants={skillContentItem}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(144, 238, 144, 0.2)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default SkillsPage;