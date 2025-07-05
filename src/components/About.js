import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <div className="about-box">
        <div className="about-text">
          <p>
              I'm <strong>Omer Faisal</strong>, a BS Data Science student passionate about building intelligent systems that solve real-world problems.
            </p>
            <p>
              With a strong foundation in <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, and <strong>Natural Language Processing</strong>, I focus on developing AI-driven solutions that learn, understand, and deliver impact.
            </p>
            <p>
              Whether it's building predictive models, extracting insight from language, or deploying smart applications — I aim to fuse <span>intelligence</span> with <span>elegance</span> in every project I build.
          </p>

        </div>
      </div>
    </motion.section>
  );
}
