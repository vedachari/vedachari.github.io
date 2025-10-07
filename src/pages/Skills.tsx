// src/pages/Home.tsx
import React from "react";
import "../styles/Skills.css";

const Skills: React.FC = () => {
  return (
    <div id="skills" className="home-skills">
        <h2 className="skills-title">Skills</h2>
        <ul className="skills-list">
          <li>React / TypeScript / JavaScript</li>
          <li>Python / AI & Machine Learning</li>
          <li>Java / C++ / Data Structures & Algorithms</li>
          <li>Full Stack Development</li>
        </ul>
      </div>
  );
};

export default Skills;
