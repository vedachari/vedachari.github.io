import React from "react";
import { skills } from "../data/skillsData"; // adjust the path if needed
import "../styles/Skills.css";

const Skills: React.FC = () => {
  return (
    <div id="skills" className="home-skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="skills-category-title">{category.name}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
