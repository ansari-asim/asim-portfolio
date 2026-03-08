import { motion } from "framer-motion";

function ExperiencePage() {
  const experiences = [
    {
      role: "MLOps Developer",
      company: "Prisma.ai — Mumbai, India",
      duration: "Aug 2025 – Present",
      description:
        "Driving end-to-end MLOps workflows for production-grade computer vision systems including model training, optimization, and deployment across edge and server environments.",
      achievements: [
        "Built and optimized AI/Computer Vision training pipelines including dataset preparation, augmentation, and model tuning",
        "Deployed production APIs and dashboards using Python, .NET, Docker, Conda environments and systemd services",
        "Managed deployments across Windows (IIS + FastCGI) and Ubuntu infrastructure",
        "Developed shell automation scripts for system startup, monitoring, and maintenance",
        "Collaborated with security teams during VAPT cycles to remediate vulnerabilities in production systems",
        "Maintained on-prem Git repositories and coordinated development workflows using Redmine"
      ]
    },
    {
      role: "Solution Engineer",
      company: "Assert AI — Mumbai, India",
      duration: "Jan 2023 – Jul 2025",
      description:
        "Designed and deployed AI-powered video analytics solutions on edge devices with focus on real-time computer vision and GPU optimization.",
      achievements: [
        "Deployed real-time AI video analytics solutions on NVIDIA Jetson edge devices",
        "Trained and optimized YOLO models including dataset cleaning and augmentation for improved detection accuracy",
        "Built and optimized NVIDIA DeepStream pipelines for high-performance video inference",
        "Developed custom Python modules for inference, data processing, and edge integration",
        "Designed scalable AI architectures for multi-camera deployments in production environments"
      ]
    },
    {
      role: "Associate Engineer",
      company: "Assert AI — Mumbai, India",
      duration: "Aug 2021 – Dec 2022",
      description:
        "Worked on deployment and integration of AI-based video analytics systems across edge infrastructure.",
      achievements: [
        "Integrated AI inference systems across multiple edge computing devices",
        "Optimized GPU resource utilization for real-time video analytics workloads",
        "Configured camera infrastructure and networking for reliable video streaming pipelines",
        "Supported deployment and troubleshooting of production AI systems"
      ]
    },
    {
      role: "AI Intern",
      company: "AI Variant — Bangalore, India",
      duration: "Nov 2022 – Jul 2023",
      description:
        "Gained hands-on exposure to AI model development and deployment workflows within computer vision projects.",
      achievements: [
        "Assisted in computer vision model experimentation and dataset preparation",
        "Explored model training pipelines and inference optimization techniques",
        "Collaborated with engineers to understand real-world AI deployment workflows"
      ]
    },
    {
      role: "Field Engineer",
      company: "Assert AI — Mumbai, India",
      duration: "Oct 2018 – Jul 2021",
      description:
        "Executed installation, commissioning, and configuration of enterprise ELV systems across multiple client sites.",
      achievements: [
        "Installed and commissioned ELV systems including CCTV, Fire Alarm Systems (FAS), and Access Control",
        "Handled on-site project deployments including device configuration and system integration",
        "Configured networking and camera infrastructure for surveillance systems",
        "Provided on-site technical support and troubleshooting during project rollouts"
      ]
    }
  ]
;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.12 }
    }
  };

  const expVariants = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: "easeOut" } }
  };

  const expContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.05 }
    }
  };

  const expContentItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
  };

  return (
    <>
      <h2 className="section-title">Experience</h2>

      <motion.div
        className="experience-timeline"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="experience-item"
            variants={expVariants}
          >
            <div className="exp-marker"></div>
            <motion.div className="exp-content" variants={expContentVariants}>
              <motion.div className="exp-header" variants={expContentItem}>
                <h3 className="exp-role">{exp.role}</h3>
                <span className="exp-duration">{exp.duration}</span>
              </motion.div>
              <motion.p className="exp-company" variants={expContentItem}>{exp.company}</motion.p>
              <motion.p className="exp-description" variants={expContentItem}>{exp.description}</motion.p>
              <motion.ul className="exp-achievements" variants={expContentItem}>
                {exp.achievements.map((achievement, i) => (
                  <motion.li key={i} variants={expContentItem}>{achievement}</motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default ExperiencePage;