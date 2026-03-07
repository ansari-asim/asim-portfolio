import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";
import InteractiveAvatar from "./InteractiveAvatar";

function About() {
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

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
      className="about-card"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <motion.div variants={imageVariants} initial="hidden" animate="visible" className="avatar-wrapper">
        <InteractiveAvatar />
      </motion.div>

      <motion.h1 className="about-title" variants={textVariants} initial="hidden" animate="visible">
        Asim Ansari
      </motion.h1>

      <motion.div layout className="typing" variants={textVariants} initial="hidden" animate="visible">
        <Typed
          strings={[
            "AI Solutions Engineer",
            "I build Computer Vision based Solution",
            "Building DeepStream video analytics on NVIDIA Jetson",
            "Love working with MLOps for AI deployment",
            "Turning ML models into real-world edge AI solutions"
          ]}
          typeSpeed={45}
          backSpeed={45}
          loop
        />
      </motion.div>

      <motion.p className="about-subtitle" variants={textVariants} initial="hidden" animate="visible">
        Specializing in real-time AI deployment on edge devices
      </motion.p>

      <motion.a 
        href={import.meta.env.BASE_URL + 'resume.pdf'} 
        target="_blank"
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