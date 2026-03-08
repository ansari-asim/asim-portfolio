import { motion } from "framer-motion";

function ContactPage() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "aasim2495@gmail.com",
      link: "mailto:aasim2495@gmail.com",
      description: "Reach out via email for detailed inquiries"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "asim-ansari",
      link: "https://www.linkedin.com/in/asim-ansari-19b383151",
      description: "Connect with me on LinkedIn"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "ansari-asim",
      link: "https://github.com/ansari-asim",
      description: "Check out my projects and contributions"
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