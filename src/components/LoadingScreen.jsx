import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function LoadingScreen() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "> INITIALIZING AI SOLUTIONS ENGINEER...";
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setIsComplete(true), 800);
    }
  }, [displayText, fullText]);

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="loading-content">
        <div className="matrix-lines">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="matrix-line"
              style={{ top: `${i * 20}%` }}
              animate={{
                x: [0, 10, -10, 0],
                opacity: [1, 0.5, 0.5, 1],
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        <motion.div
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="terminal-text">{displayText}</span>
          <motion.span
            className="cursor"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            _
          </motion.span>
        </motion.div>

        <motion.div
          className="loader-bar"
          initial={{ width: "0%" }}
          animate={{ width: isComplete ? "100%" : "0%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
