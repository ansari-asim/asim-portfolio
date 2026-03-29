import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactTyped as Typed } from "react-typed";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const neuralDepthUrl = "https://ansari-asim.github.io/GPU-Documentation/";

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <nav className="navbar">
        {/* LEFT BRAND BLOCK */}
        <div className="brand-block">
          <div className="brand-name">Asim Ansari</div>
          <div className="brand-role">
            <Typed
              strings={[
                "Nvidia DeepStream",
                "Gstreamer",
                "Linux & Jetpack",
                "TensorRT",
                "Pytorch",   
                "YOLO & OpenCV",
                "NVIDIA Jetson Edge",
                "Docker",
                "Git & CI/CD"
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
              showCursor
            />
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
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
            to="/certificates"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Certificates
          </NavLink>

          <a
            href={neuralDepthUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
          >
            Neural Depth
          </a>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* HAMBURGER MENU FOR MOBILE */}
        <button
          className={`hamburger ${sidebarOpen ? "open flip" : ""}`}
          onClick={toggleSidebar}
          aria-label="open navigation menu"
        >
          &gt;
        </button>
      </nav>

      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <>
          <div className="sidebar-overlay" onClick={closeSidebar}></div>
          <div className="mobile-sidebar">
            <NavLink
              to="/"
              end
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/skills"
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              Skills
            </NavLink>

            <NavLink
              to="/projects"
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/experience"
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              Experience
            </NavLink>

            <NavLink
              to="/certificates"
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              Certificates
            </NavLink>

            <a
              href={neuralDepthUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeSidebar}
              className="sidebar-item"
            >
              Neural Depth
            </a>

            <NavLink
              to="/contact"
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              Contact
            </NavLink>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;