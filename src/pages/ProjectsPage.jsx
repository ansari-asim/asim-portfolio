import { motion } from "framer-motion";

function ProjectsPage() {
  const projects = [
    {
      title: "RailVision – Railway Passenger Analytics System",
      description:
        "Designed and deployed an AI-powered passenger analytics system for Mumbai's Central, Western and Harbour railway lines. The solution performs real-time footfall counting and gender identification using live camera streams. The insights help railway authorities analyze rush hours, peak traffic patterns and passenger distribution to improve platform infrastructure and crowd management. The system processes multiple RTSP streams with optimized GPU inference pipelines.",
      tech: [
        "DeepStream",
        "GStreamer",
        "PyTorch",
        "ONNX",
        "OpenCV",
        "FFmpeg",
        "RTX A6000",
        "RTSP Streaming",
        "Deep Learning"
      ]
    },
    {
      title: "GrainGuard – Smart Warehouse Security Monitoring",
      description:
        "Developed and deployed an intelligent surveillance system for grain warehouses that detects shutter open/close events, vehicle intrusion inside premises and abnormal crowd presence. The system continuously monitors camera feeds and triggers real-time alerts to security teams, helping prevent theft, unauthorized entry and operational risks.",
      tech: [
        "OpenCV",
        "PyTorch",
        "DeepStream",
        "FFmpeg",
        "GStreamer",
        "ONNX",
        "NVIDIA Jetson Edge AI",
        "Real-Time Notification SMS",
        "MQTT Alerts"
      ]
    },
    {
      title: "SafePlant – Manufacturing Plant Safety Intelligence",
      description:
        "Implemented an AI-based safety monitoring solution in manufacturing warehouses to detect unsafe conditions in real time. The system identifies forklift and human presence in the same lane and activates an on-site hooter alert to prevent accidents. Additional modules detect floor waste, unauthorized machine access and PPE violations including missing safety vest or hard hat.",
      tech: [
        "PyTorch",
        "OpenCV",
        "Deep Learning",
        "DeepStream",
        "ONNX",
        "FFmpeg",
        "NVIDIA Jetson AGX",
        "RTX 4090",
        "Industrial IoT Integration"
      ]
    },
    {
      title: "LiveFace – Real-Time Event Face Recognition",
      description:
        "Built a live face detection and recognition system for events where cameras detect attendees in real time and display the person’s name overlay on the live video feed when identified. The system performs fast face detection and recognition on streaming video.",
      tech: [
        "OpenCV",
        "PyTorch",
        "Deep Learning",
        "ONNX",
        "FFmpeg",
        "RTX 4090",
        "Face Recognition"
      ]
    },
    {
      title: "UrbanFlow – Mall & Township Traffic Analytics",
      description:
        "Developed AI-based analytics solutions for malls and residential townships. The system performs real-time person counting in malls and vehicle counting for Brookfield township to understand movement patterns, peak traffic hours and infrastructure utilization.",
      tech: [
        "DeepStream",
        "OpenCV",
        "PyTorch",
        "FFmpeg",
        "ONNX",
        "GStreamer",
        "RTX 4090",
        "Vehicle Tracking",
        "Deep Learning"
      ]
    },
    {
      title: "AxleTrack – Toll Plaza ANPR & Vehicle Classification",
      description:
        "Implemented an Automatic Number Plate Recognition (ANPR) system for toll plazas combined with vehicle counting and tyre detection to determine axle count. The solution helps toll operators detect toll fraud and correctly classify vehicle types based on axle count.",
      tech: [
        "PyTorch",
        "OpenCV",
        "DeepStream",
        "ONNX",
        "GStreamer",
        "FFmpeg",
        "RTX 4090",
        "ANPR",
        "Vehicle Classification"
      ]
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="page-wrapper">
      <div className="page-card">
        <h2 className="section-title">Projects</h2>
        
        <motion.div 
          className="projects-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="project-item"
              variants={projectVariants}
              whileHover={{ x: 5, backgroundColor: "rgba(144, 238, 144, 0.08)" }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsPage;