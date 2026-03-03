import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";

function About() {
  return (
    <motion.div
      className="about-card"
      layout
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <img
        src={import.meta.env.BASE_URL + 'profile.jpg'}
        alt="Asim Ansari"
        className="profile-img"
      />

      <h1 className="about-title">Asim Ansari</h1>

      <motion.div layout className="typing">
        <Typed
          strings={[
            "AI Solutions Engineer.",
            "Expert in DeepStream, TensorRT and Edge AI deployment.",
          ]}
          typeSpeed={45}
          backSpeed={30}
          loop
        />
      </motion.div>

      <a href={import.meta.env.BASE_URL + 'resume.pdf'} target="_blank">
        <button className="resume-btn">Resume</button>
      </a>
    </motion.div>
  );
}

export default About;