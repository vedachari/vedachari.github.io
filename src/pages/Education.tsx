// src/pages/Home.tsx
import React from "react";
import "../styles/Education.css";
import Box from "../components/Box";

const Education: React.FC = () => {
  return (
      <div id="education" className="home-education">
        
        <h2 className="education-title">Education</h2>
        <Box>
        <p>Bachelor of Science in Computer Science and Neuroscience, Boston University, May 2025</p>
        </Box>
      </div>
  );
};

export default Education;
