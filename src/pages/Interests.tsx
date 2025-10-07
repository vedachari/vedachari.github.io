// src/pages/Home.tsx
import React from "react";
import "../styles/Interests.css";
import Box from "../components/Box";

const Interests: React.FC = () => {
  return (
      <div id="interests" className="home-interests">
        <h2 className="interests-title">Interests</h2>
        <ul className="interests-list">
          <li>React / TypeScript / JavaScript</li>
          <li>Python / AI & Machine Learning</li>
          <li>Java / C++ / Data Structures & Algorithms</li>
          <li>Full Stack Development</li>
        </ul>
      </div>
  );
};

export default Interests;
