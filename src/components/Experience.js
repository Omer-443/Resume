import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Experience</h2>
      <div className="exp-card">
        <h3>Teaching Assistant – Database Systems</h3>
        <p><strong>PUCIT</strong> · Lahore, Pakistan</p>
        <p className="date">Feb 2025 – June 2025</p>
        <p>
          Conducted lab sessions, assisted students in database implementation and SQL practices,
          supported curriculum delivery and assessments.
        </p>
      </div>
    </motion.section>
  );
}
