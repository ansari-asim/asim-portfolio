import { NavLink } from "react-router-dom";
import { ReactTyped as Typed } from "react-typed";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT BRAND BLOCK */}
      <div className="brand-block">
        <div className="brand-name">Asim Ansari</div>
        <div className="brand-role">
          <Typed
            strings={[
              "DeepStream",
              "TensorRT",
              "YOLO Optimization",
              "NVIDIA Jetson Deployment",
              "Docker & MLOps",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
            showCursor
          />
        </div>
      </div>

      {/* RIGHT NAVIGATION */}
      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Skills
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/experience"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Experience
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Contact
        </NavLink>
      </div>

    </nav>
  );
}

export default Navbar;