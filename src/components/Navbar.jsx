import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT BRAND BLOCK */}
      <div className="brand-block">
        <div className="brand-name">Asim Ansari</div>
        <div className="brand-role">
          Edge AI Engineer · NVIDIA Jetson · MLOps · Real-Time AI Deployment · TensorRT · OpenCV · PyTorch
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