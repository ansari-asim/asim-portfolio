import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

function About() {
  return (
    <motion.div
      className="about-card"
      layout
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <img
        src="/profile.jpg"
        alt="Asim Ansari"
        className="profile-img"
      />

      <h1 className="about-title">Asim Ansari</h1>

      <motion.div layout className="typing">
        <ReactTyped
          strings={[
            "AI Solutions Engineer.",
            "Expert in DeepStream, TensorRT and Edge AI deployment.",
          ]}
          typeSpeed={45}
          backSpeed={30}
          loop
        />
      </motion.div>

      <a href="/resume.pdf" target="_blank">
        <button className="resume-btn">Resume</button>
      </a>
    </motion.div>
  );
}

export default About;