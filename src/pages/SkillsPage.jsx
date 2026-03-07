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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="page-wrapper">
      <div className="page-card">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} className="skill-category" variants={itemVariants}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-tag"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(144, 238, 144, 0.2)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsPage;