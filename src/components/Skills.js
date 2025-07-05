import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase,
  FaGitAlt, FaGithub, FaChartBar
} from 'react-icons/fa';
import {
  SiNumpy, SiPandas, SiScikitlearn, SiJupyter, SiFastapi,
   SiMysql, SiOpencv,  SiPytorch, SiReact, SiPostgresql
} from 'react-icons/si';
import './Skills.css';

const skills = [
  {
    category: "Programming & Scripting",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "Java (Basic)", icon: <FaJava /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
  {
    category: "Data Analysis & Visualization",
    items: [
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Matplotlib", icon: <FaChartBar /> },
      { name: "Excel", icon: <FaChartBar /> },
      { name: "Power BI", icon: <FaChartBar /> },
      { name: "EDA", icon: null },
      { name: "Hypothesis Testing", icon: null },
    ],
  },
  {
    category: "Libraries & Tools",
    items: [
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "ML Models", icon: null },
      { name: "Huggingface Transformers", icon: null },
      { name: "Torch", icon: <SiPytorch /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "Jupyter Notebook", icon: <SiJupyter /> },
      { name: "VS Code", icon: null},
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "React", icon: <SiReact /> },
      { name: "FastAPI", icon: <SiFastapi /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "SQLite", icon: <SiMysql /> },
      { name: "Oracle", icon: <FaDatabase /> },
      { name: "DB Browser", icon: <SiMysql /> },
      { name: "SQL Server (SSMS)", icon: <SiMysql /> },
    ],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Skills & Tools</h2>
      <div className="skills-container">
        {skills.map((group, idx) => (
          <div className="skill-card" key={idx}>
            <h3>{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((skill, i) => (
                <span className="tag" key={i}>
                  {skill.icon && <span className="icon">{skill.icon}</span>}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
