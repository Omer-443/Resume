import React from 'react';
import { motion } from 'framer-motion';
import './Research.css';

const papers = [
  {
    title: "Forecasting Vivid Dreams",
    desc: "Machine learning–based analysis of psychological and behavioral data to predict vivid dream experiences. Manuscript in progress."
  },
  {
    title: "Coronary Artery Disease Risk Factors",
    desc: "Predictive modeling of cardiac risk using health indicators. Data-driven approach under academic review."
  }
];

export default function Research() {
  return (
    <motion.section
      id="research"
      className="research"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Research</h2>
      <div className="research-cards">
        {papers.map((paper, i) => (
          <motion.div key={i} className="research-card" whileHover={{ scale: 1.03 }}>
            <h3>{paper.title}</h3>
            <p>{paper.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
