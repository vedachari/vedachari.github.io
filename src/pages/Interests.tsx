import React from "react";
import { interests } from "../data/interestsData"; // adjust the path if needed
import "../styles/Interests.css";

const Skills: React.FC = () => {
  return (
    <div id="interests" className="home-interests">
      <div className="interests-container">
        <h2 className="interests-title">Interests</h2>
        <ul className="interests-list">
          {interests.map((category) => (
            <li>{category.name}</li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
