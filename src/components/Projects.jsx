function Projects() {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div className="card">
        <h3>Vehicle Detection & ANPR (Mumbai Police)</h3>
        <p>
          Real-time vehicle classification, helmet & seatbelt compliance using
          YOLO and DeepStream on Jetson.
        </p>
      </div>

      <div className="card">
        <h3>Warehouse PPE & Forklift Detection</h3>
        <p>
          Safety monitoring system with automated alerts deployed on edge
          devices.
        </p>
      </div>

      <div className="card">
        <h3>Crowd Analytics - Mumbai Railway</h3>
        <p>
          Entry/exit detection with gender classification for infrastructure
          optimization.
        </p>
      </div>
    </section>
  );
}

export default Projects;
