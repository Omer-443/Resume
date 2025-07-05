import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';

export default function Header() {
  return (
    <header>
      <h1>Omer Faisal</h1>
      <p>
        📞 +92 345 4043445 | 📧{' '}
        <a href="mailto:official.omerfaisal@gmail.com">
          <FaEnvelope /> official.omerfaisal@gmail.com
        </a>
        <br />
        <a href="https://github.com/Omer-443" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        |
        <a href="https://linkedin.com/in/omer-faisal-ab382425b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        |
        <a href="https://www.kaggle.com/omerfaisal" target="_blank" rel="noopener noreferrer">
          <SiKaggle /> Kaggle
        </a>
      </p>
    </header>
  );
}
