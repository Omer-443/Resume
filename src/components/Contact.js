import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si'; // ✅ Add this line
import './Contact.css';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Contact</h2>
      <p>Let’s build something awesome together. Reach out anytime!</p>
      <div className="contact-icons">
        <a href="mailto:official.omerfaisal@gmail.com" title="Email"><FaEnvelope /></a>
        <a href="https://github.com/Omer-443" target="_blank" title="GitHub" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/omer-faisal-ab382425b" target="_blank" title="LinkedIn" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.kaggle.com/omerfaisal443" target="_blank" title="Kaggle" rel="noopener noreferrer"><SiKaggle /></a>
      </div>
    </motion.section>
  );
}
