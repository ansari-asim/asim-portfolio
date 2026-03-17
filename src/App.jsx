

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import LoadingScreen from "./components/LoadingScreen";
import MouseTrail from "./components/MouseTrail";
import Navbar from "./components/Navbar";
import MatrixBackground from "./components/MatrixBackground";
import About from "./components/About";

import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import CertificatesPage from "./pages/CertificatesPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [isNarrowViewport, setIsNarrowViewport] = useState(() => window.innerWidth <= 1100);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleViewportChange = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1100px)");
    const handleViewportChange = (event) => setIsNarrowViewport(event.matches);

    setIsNarrowViewport(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <MouseTrail />
          <MatrixBackground />
          <Navbar />

          <div className={`split-layout ${isHome ? "home-mode" : "detail-mode"}`}>
            <motion.div
              className="split-left"
              initial={false}
              animate={{ x: isHome || isMobile || isNarrowViewport ? 0 : -48, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <About compact={!isHome} />
            </motion.div>

            {!isHome && (
              <div
                id="content-scroll-panel"
                className="split-right"
              >
                <AnimatePresence mode="sync">
                  <Routes location={location} key={location.pathname}>
                    <Route path="/skills" element={<PageWrapper><SkillsPage /></PageWrapper>} />
                    <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
                    <Route path="/experience" element={<PageWrapper><ExperiencePage /></PageWrapper>} />
                    <Route path="/certificates" element={<PageWrapper><CertificatesPage /></PageWrapper>} />
                    <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
                  </Routes>
                </AnimatePresence>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    className="page-card split-page-card"
    initial={{ opacity: 0, y: 28 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default App;



