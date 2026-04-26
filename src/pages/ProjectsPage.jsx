import { useState } from "react";
import { motion } from "framer-motion";

function ProjectsPage() {
  const [projectType, setProjectType] = useState("commercial");
  const featuredProjects = [
    {
      title: "StreamWatch - Unified Video & Service Observability Platform",
      repository: "https://github.com/ansari-asim/Monitoring-dashboard.git",
      summary:
        "Centralized monitoring platform for RTSP streams, network latency, frame capture pipelines, and cross-environment service uptime.",
      problem:
        "Distributed video systems often fail silently across network, stream, and service layers. Operations teams need a single control plane to detect degraded RTSP feeds, rising latency, stalled frame extraction, and service outages before they affect downstream analytics or incident response.",
      solution:
        "Designed and implemented a unified monitoring workflow that ingests RTSP endpoints, validates stream availability, measures latency and network health, extracts diagnostic frames through FFmpeg, and verifies runtime status for Linux services, Python processes, and IIS-hosted workloads. The platform consolidates health signals into one operational view so teams can triage video and infrastructure issues faster.",
      architecture:
        "RTSP camera endpoints feed a monitoring layer that runs availability checks, latency probes, and FFmpeg-based frame extraction jobs. A parallel service health module inspects systemd services, Python applications, and IIS workloads. Results are normalized into a single status model for alerting, debugging, and operator review.",
      features: [
        "Monitors RTSP camera streams for reachability and live feed health",
        "Measures latency and network quality to identify unstable endpoints",
        "Extracts validation frames with FFmpeg for rapid visual diagnosis",
        "Checks runtime state across Linux services, Python applications, and IIS services",
        "Unifies video telemetry and service telemetry into one operational workflow"
      ],
      futureImprovements: [
        "Add threshold-based alerting through Slack, email, or webhook integrations",
        "Persist health metrics for trend analysis and SLA reporting",
        "Containerize probe workers for horizontal scaling across sites",
        "Introduce dashboard drill-down views and historical incident timelines"
      ],
      tech: [
        "RTSP",
        "FFmpeg",
        "Linux",
        "Python",
        "IIS",
        "Network Monitoring",
        "Service Health Checks",
        "Observability"
      ]
    },
    {
      title: "ReviewPilot - Local AI Pull Request Review Platform",
      repository: "https://github.com/ansari-asim/PR_Agent-Gitea-Ollama.git",
      summary:
        "Offline pull request review system that integrates Gitea with Ollama-powered LLM inference to generate automated code review feedback.",
      problem:
        "Teams using self-hosted source control often want AI-assisted PR reviews without sending proprietary code to external SaaS platforms. They need a local review pipeline that can analyze changesets, surface code quality issues, and fit into existing Gitea workflows with minimal operational overhead.",
      solution:
        "Built a local LLM-based PR review agent that connects Gitea pull request events to an Ollama inference backend and presents the review experience through Open WebUI. The system analyzes code diffs, generates structured review suggestions, and keeps the full inference path inside the local environment for privacy, control, and predictable operating cost.",
      architecture:
        "Gitea emits pull request events to an integration layer that collects metadata and diffs. The review agent prepares prompts, routes them to Ollama for offline inference, and formats the output into actionable review comments. Open WebUI provides an operator-facing interface for reviewing responses, tuning prompts, and inspecting generated suggestions.",
      features: [
        "Automates PR review suggestions from local LLM inference",
        "Integrates directly with Gitea-based source control workflows",
        "Runs fully offline with Ollama to keep source code on-premise",
        "Surfaces review feedback for code quality, maintainability, and implementation risks",
        "Uses Open WebUI for prompt iteration and review visibility"
      ],
      futureImprovements: [
        "Add severity scoring and policy-based review gates for CI workflows",
        "Support repository-specific review prompts and coding standards",
        "Cache embeddings or summaries to reduce repeat review latency",
        "Expand output formatting to inline comments and approval recommendations"
      ],
      tech: [
        "Ollama",
        "Gitea",
        "Open WebUI",
        "LLM Inference",
        "Git",
        "Automation",
        "Self-Hosted AI",
        "Code Review"
      ]
    }
  ];

  const otherProjects = [
    {
      title: "RailVision - Railway Passenger Analytics System",
      description:
        "Designed and deployed an AI-powered passenger analytics system for Mumbai's Central, Western and Harbour railway lines. The solution performs real-time footfall counting and gender identification using live camera streams to help operators analyze rush hours, peak traffic patterns, and platform utilization.",
      tech: [
        "DeepStream",
        "GStreamer",
        "PyTorch",
        "ONNX",
        "OpenCV",
        "FFmpeg",
        "RTX A6000",
        "RTSP Streaming"
      ]
    },
    {
      title: "GrainGuard - Smart Warehouse Security Monitoring",
      description:
        "Developed and deployed an intelligent surveillance system for grain warehouses that detects shutter events, vehicle intrusion, and abnormal crowd presence, triggering real-time alerts for security teams.",
      tech: [
        "OpenCV",
        "PyTorch",
        "DeepStream",
        "FFmpeg",
        "GStreamer",
        "ONNX",
        "Jetson Edge AI",
        "MQTT Alerts"
      ]
    },
    {
      title: "SafePlant - Manufacturing Plant Safety Intelligence",
      description:
        "Implemented an AI-based safety monitoring solution for manufacturing environments to detect forklift-human proximity, PPE violations, unauthorized machine access, and floor waste with real-time on-site alerts.",
      tech: [
        "PyTorch",
        "OpenCV",
        "DeepStream",
        "ONNX",
        "FFmpeg",
        "Jetson AGX",
        "RTX 4090",
        "Industrial IoT"
      ]
    },
    {
      title: "LiveFace - Real-Time Event Face Recognition",
      description:
        "Built a live face detection and recognition pipeline for event environments that identifies attendees from streaming video and overlays recognized names directly on the feed.",
      tech: [
        "OpenCV",
        "PyTorch",
        "ONNX",
        "FFmpeg",
        "RTX 4090",
        "Face Recognition"
      ]
    },
    {
      title: "UrbanFlow - Mall & Township Traffic Analytics",
      description:
        "Developed analytics solutions for malls and residential communities to track person and vehicle movement, helping operators understand peak traffic windows and infrastructure utilization.",
      tech: [
        "DeepStream",
        "OpenCV",
        "PyTorch",
        "FFmpeg",
        "ONNX",
        "GStreamer",
        "RTX 4090",
        "Vehicle Tracking"
      ]
    },
    {
      title: "AxleTrack - Toll Plaza ANPR & Vehicle Classification",
      description:
        "Implemented an ANPR and axle-counting system for toll plazas to classify vehicles accurately and detect toll fraud through number plate recognition and tyre-based axle analysis.",
      tech: [
        "PyTorch",
        "OpenCV",
        "DeepStream",
        "ONNX",
        "GStreamer",
        "FFmpeg",
        "RTX 4090",
        "ANPR"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.12 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: "easeOut" } }
  };

  const projectContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.06 }
    }
  };

  const projectContentItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
  };

  const isCommercialView = projectType === "commercial";

  return (
    <>
      <h2 className="section-title">Projects</h2>

      <div className="projects-toolbar">
        <div className="projects-intro">
          {isCommercialView
            ? "Production deployments across video analytics, edge AI, traffic intelligence, and industrial monitoring."
            : "Product-oriented builds focused on observability, self-hosted AI automation, and developer productivity."}
        </div>

        <label className="project-filter">
          <span className="project-filter-label">Project Type</span>
          <div className="project-filter-shell">
            <select
              className="project-filter-select"
              value={projectType}
              onChange={(event) => setProjectType(event.target.value)}
            >
              <option value="commercial">Commercial Projects</option>
              <option value="personal">Personal Projects</option>
            </select>
            <span className="project-filter-chevron" aria-hidden="true">
              ▾
            </span>
          </div>
        </label>
      </div>

      {isCommercialView ? (
        <div className="projects-subsection">
          <h3 className="projects-subtitle">Commercial Projects</h3>
          <motion.div
            className="projects-list compact-projects-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {otherProjects.map((project, idx) => (
              <motion.div
                key={idx}
                className="project-item"
                variants={projectVariants}
                whileHover={{ x: 5, backgroundColor: "rgba(144, 238, 144, 0.08)" }}
              >
                <motion.div variants={projectContentVariants}>
                  <motion.div className="project-header" variants={projectContentItem}>
                    <h3 className="project-title">{project.title}</h3>
                  </motion.div>
                  <motion.p className="project-description" variants={projectContentItem}>
                    {project.description}
                  </motion.p>
                  <motion.div className="project-tech" variants={projectContentItem}>
                    {project.tech.map((t, i) => (
                      <motion.span key={i} className="tech-badge" variants={projectContentItem}>
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        <motion.div
          className="projects-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-item featured-project-item"
              variants={projectVariants}
              whileHover={{ x: 5, backgroundColor: "rgba(144, 238, 144, 0.08)" }}
            >
              <motion.div variants={projectContentVariants}>
                <motion.div className="project-header" variants={projectContentItem}>
                  <span className="project-label">Personal Project</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                </motion.div>

                <motion.div className="project-sections" variants={projectContentItem}>
                  <div className="project-section">
                    <h4 className="project-section-title">Problem</h4>
                    <p className="project-description">{project.problem}</p>
                  </div>
                  <div className="project-section">
                    <h4 className="project-section-title">Solution</h4>
                    <p className="project-description">{project.solution}</p>
                  </div>
                  <div className="project-section">
                    <h4 className="project-section-title">Architecture</h4>
                    <p className="project-description">{project.architecture}</p>
                  </div>
                </motion.div>

                <motion.div className="project-feature-grid" variants={projectContentItem}>
                  <div className="project-list-block">
                    <h4 className="project-section-title">Key Features</h4>
                    <ul className="project-bullets">
                      {project.features.map((feature, featureIdx) => (
                        <li key={featureIdx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-list-block">
                    <h4 className="project-section-title">Future Improvements</h4>
                    <ul className="project-bullets">
                      {project.futureImprovements.map((item, futureIdx) => (
                        <li key={futureIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div className="project-tech" variants={projectContentItem}>
                  {project.tech.map((t, i) => (
                    <motion.span key={i} className="tech-badge" variants={projectContentItem}>
                      {t}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div className="project-repo-actions" variants={projectContentItem}>
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-repo-button"
                  >
                    View GitHub Repository
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}

export default ProjectsPage;
