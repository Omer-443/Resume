import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import profilePic from '../assets/omer.jpeg';
import resumePDF from '../assets/Omer Faisal Resume.pdf';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-inner"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <div className="profile-img">
          <img src={profilePic} alt="Omer Faisal" />
        </div>


        <h1>
  Hi, I'm <span className="highlight">Omer Faisal</span>
</h1>

<p className="tagline">
  ML Engineer • Deep Learning Developer • NLP & AI Enthusiast
</p>

<p className="mission">
  I design intelligent systems that understand language and learn from data — combining <span>deep learning</span>, <span>transformers</span>, and <span>clean code</span> to build real-world impact.
</p>


        <div className="hero-buttons">
          <a href="#projects" className="btn">See My Work</a>
          <a href="mailto:official.omerfaisal@gmail.com" className="btn-outline">Contact Me</a>
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="btn-outline">View Resume</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/Omer-443" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/omer-faisal-ab382425b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:official.omerfaisal@gmail.com"><FaEnvelope /></a>
          <a href="https://www.kaggle.com/omerfaisal443" target="_blank" rel="noopener noreferrer"><SiKaggle /></a>
        </div>
      </motion.div>
    </section>
  );
}
