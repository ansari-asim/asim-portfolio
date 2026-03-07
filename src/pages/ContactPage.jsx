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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="page-wrapper">
      <div className="page-card">
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
              <div className="contact-icon">{method.icon}</div>
              <h3 className="contact-title">{method.title}</h3>
              <p className="contact-value">{method.value}</p>
              <p className="contact-description">{method.description}</p>
              <div className="contact-arrow">→</div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="contact-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p>
            Whether you have a question, project proposal, or just want to connect, 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactPage;