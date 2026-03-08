import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";

function About({ compact = false }) {
  const profileSummary = [
    "I design and deploy production-grade AI and computer vision systems with a focus on performance, reliability, and maintainability.",
    "My work includes edge AI pipelines on NVIDIA Jetson, DeepStream-based analytics, and MLOps-driven deployment workflows across Linux and containerized environments."
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  return (
    <motion.div
      className={`about-card ${compact ? "compact" : ""}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, layout: { duration: 0.3 } }}
    >
      <motion.h1 className="about-title" variants={textVariants} initial="hidden" animate="visible">
        Asim Ansari
      </motion.h1>

      <motion.div className="typing" layout variants={textVariants} initial="hidden" animate="visible">
        <Typed
          strings={[
            "AI Solutions Engineer",
            "Building computer vision solutions",
            "Developing DeepStream analytics on NVIDIA Jetson",
            "MLOps for reliable AI deployment",
            "Turning ML models into real-world edge AI products"
          ]}
          typeSpeed={45}
          backSpeed={45}
          loop
        />
      </motion.div>

      <motion.p className="about-subtitle" variants={textVariants} initial="hidden" animate="visible">
        Edge AI • Computer Vision • MLOps
      </motion.p>

      <motion.div className="about-description" variants={textVariants} initial="hidden" animate="visible">
        {profileSummary.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </motion.div>

      <motion.a 
        href={import.meta.env.BASE_URL + 'resume.pdf'} 
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="resume-btn">
          <span>Download Resume</span>
        </button>
      </motion.a>
    </motion.div>
  );
}

export default About;