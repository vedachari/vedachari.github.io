// src/pages/Home.tsx
import React from "react";
import "../styles/Interests.css";

const Interests: React.FC = () => {
  return (
      <div id="interests" className="home-interests">
        <h2 className="section-title">Interests</h2>
        <p>
          AI & Machine Learning, Open Source Projects, Web Development, Chess, and Music.
        </p>
      </div>
  );
};

export default Interests;
