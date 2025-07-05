import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Omer Faisal</div>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
