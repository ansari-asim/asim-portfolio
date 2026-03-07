

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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
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

          <div className="main-container">

            <About />

            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/skills" element={<PageWrapper><SkillsPage /></PageWrapper>} />
                <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
                <Route path="/experience" element={<PageWrapper><ExperiencePage /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
              </Routes>
            </AnimatePresence>

          </div>
        </>
      )}
    </>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    className="page-card"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

export default App;



