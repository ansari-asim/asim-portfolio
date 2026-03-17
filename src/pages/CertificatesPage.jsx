import { motion } from "framer-motion";

function CertificatesPage() {
  const logoBasePath = import.meta.env.BASE_URL;

  const certificates = [
    {
      title: "Getting Started with AI on Jetson Nano",
      issuer: "NVIDIA",
      link: "https://drive.google.com/file/d/1y36-HZUa6S7u8Mf5wAhZytYzzwR0TU1Y/view?usp=sharing",
      logo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128"
    },
    {
      title: "Building Video AI Applications at the Edge on Jetson Nano",
      issuer: "NVIDIA",
      link: "https://drive.google.com/file/d/1VJSxJCxIkR3mV_GhbLJefAGnb9cXVS4n/view?usp=sharing",
      logo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128"
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      link: "https://drive.google.com/file/d/1lKi-ywuaCP62lKB_3_qzqmETX_6jiTD3/view?usp=sharing",
      logo: `${logoBasePath}logos/ibm.svg`
    },
    {
      title: "Google Cloud LLM Badge",
      issuer: "Google",
      link: "https://www.cloudskillsboost.google/public_profiles/22196e28-363b-4354-89b0-58f7db3022c8/badges/6450169",
      logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128"
    },
    {
      title: "Diploma in Data Science",
      issuer: "ExcelR Institute",
      link: "https://drive.google.com/file/d/15JuGe73D0bhqdlesC8y_S0Q96gefZd9R/view?usp=sharing",
      logo: "https://www.google.com/s2/favicons?domain=excelr.com&sz=128"
    },
    {
      title: "Diploma in Electronics & Telecommunication",
      issuer: "St. Xavier's",
      link: "https://drive.google.com/file/d/1RinNOs35BshmDBt1kFQlefdd--zy7SRw/view?usp=sharing",
      logo: `${logoBasePath}logos/st-xaviers.png`
    },
    {
      title: "Internship Certification",
      issuer: "AI Variant",
      link: "https://drive.google.com/file/d/1jNGwZJaaGVesdLrYnSfUWVEzLv5ts6Zp/view?usp=sharing",
      logo: `${logoBasePath}logos/ai-variant.svg`
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
      <h2 className="section-title">Certifications</h2>

      <motion.div
        className="certificates-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {certificates.map((certificate, idx) => (
          <motion.a
            key={idx}
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(144, 238, 144, 0.2)" }}
          >
            <motion.div variants={contentVariants}>
              <motion.div className="certificate-logo-wrap" variants={contentItem}>
                <img
                  src={certificate.logo}
                  alt={`${certificate.issuer} logo`}
                  className="certificate-logo"
                  loading="lazy"
                />
              </motion.div>
              <motion.h3 className="certificate-title" variants={contentItem}>
                {certificate.title}
              </motion.h3>
              <motion.p className="certificate-issuer" variants={contentItem}>
                {certificate.issuer}
              </motion.p>
              <motion.div className="certificate-cta" variants={contentItem}>View Certificate →</motion.div>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}

export default CertificatesPage;