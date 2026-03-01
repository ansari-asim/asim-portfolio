import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Left Content */}
      <div className="hero-left">
        <h1>Hi, I'm Asim Ansari</h1>
        <h2>AI Solutions Engineer | Edge AI | NVIDIA Jetson | MLOps</h2>
        <p>
          I build real-time AI-powered video analytics systems optimized for
          NVIDIA Jetson edge devices using DeepStream, TensorRT, and CUDA.
        </p>

        {/* Resume */}
        <a href="/resume.pdf" download="Asim_Ansari_Resume.pdf">
          <button className="cyber-btn">Download Resume</button>
        </a>
      </div>

      {/* Right Image */}
      <div className="hero-right">
      <img
        src="/profile.jpg"
        alt="Asim Ansari"
        style={{
          width: "280px",
          height: "280px",
          objectFit: "cover",
          borderRadius: "50%"
        }}
      />  
      </div>
    </section>
  );
}

export default Hero;