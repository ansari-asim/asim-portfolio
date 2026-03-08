import { motion } from "framer-motion";

const iconMap = {
  gmail: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M2.5 6.5 12 13.4l9.5-6.9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 6h17a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="8" cy="8" r="1.1" fill="currentColor" />
      <path d="M8 10.5v6.2M11.2 10.5v6.2M11.2 13.2c0-1.7.9-2.8 2.5-2.8 1.6 0 2.5 1.1 2.5 2.8v3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3.1a8.95 8.95 0 0 0-2.83 17.45c.45.08.61-.2.61-.43v-1.7c-2.5.55-3.03-1.07-3.03-1.07-.41-1.05-1-1.33-1-1.33-.81-.55.06-.54.06-.54.9.06 1.38.93 1.38.93.8 1.37 2.1.97 2.6.74.08-.59.31-.97.56-1.2-2-.23-4.1-1-4.1-4.46 0-.99.35-1.8.93-2.43-.09-.23-.4-1.16.09-2.41 0 0 .76-.24 2.48.93a8.65 8.65 0 0 1 4.52 0c1.72-1.17 2.48-.93 2.48-.93.49 1.25.18 2.18.09 2.41.58.63.93 1.44.93 2.43 0 3.47-2.11 4.23-4.13 4.45.33.28.61.84.61 1.7v2.52c0 .24.16.52.62.43A8.95 8.95 0 0 0 12 3.1Z" fill="currentColor" />
    </svg>
  ),
  blog: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5.2 5.2h13.6a1.6 1.6 0 0 1 1.6 1.6v10.4a1.6 1.6 0 0 1-1.6 1.6H5.2a1.6 1.6 0 0 1-1.6-1.6V6.8a1.6 1.6 0 0 1 1.6-1.6Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M7.4 9.2h9.2M7.4 12h6.8M7.4 14.8h4.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
};

function ContactPage() {
  const contactMethods = [
    {
      icon: iconMap.gmail,
      title: "Email",
      value: "aasim2495@gmail.com",
      link: "mailto:aasim2495@gmail.com",
      description: "Reach out via email for detailed inquiries"
    },
    {
      icon: iconMap.linkedin,
      title: "LinkedIn",
      value: "asim-ansari",
      link: "https://www.linkedin.com/in/asim-ansari-19b383151",
      description: "Connect with me on LinkedIn"
    },
    {
      icon: iconMap.github,
      title: "GitHub",
      value: "ansari-asim",
      link: "https://github.com/ansari-asim",
      description: "Check out my projects and contributions"
    },
    {
      icon: iconMap.blog,
      title: "Blog",
      value: "AI Hardware Docs",
      link: "https://ansari-asim.github.io/GPU-Documentation/GPU/",
      description: "Share your blog and technical write-ups here"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.05 }
    }
  };

  const contentItem = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <>
      <h2 className="section-title">Get In Touch</h2>

      <motion.div
        className="contact-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contactMethods.map((method, idx) => (
          <motion.a
            key={idx}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(144, 238, 144, 0.2)" }}
          >
            <motion.div variants={contentVariants}>
              <motion.div className="contact-icon" variants={contentItem}>{method.icon}</motion.div>
              <motion.h3 className="contact-title" variants={contentItem}>{method.title}</motion.h3>
              <motion.p className="contact-value" variants={contentItem}>{method.value}</motion.p>
              <motion.p className="contact-description" variants={contentItem}>{method.description}</motion.p>
              <motion.div className="contact-arrow" variants={contentItem}>→</motion.div>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="contact-message"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.55, ease: "easeOut" }}
      >
        <p>
          Whether you have a question, project proposal, or just want to connect,
          I'd love to hear from you. Let's create something amazing together!
        </p>
      </motion.div>
    </>
  );
}

export default ContactPage;