// src/pages/Home.tsx
import React from "react";
import Box from "../components/Box"
import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    
      <div id="home" className="home-intro">
        <Box>
        <h1 className="home-hello">Hello!</h1>
        <p className="home-hello-subtitle">My name is</p>
        
        <h1 className="home-title">Veda Chari</h1>
        </Box>
        <p className="home-subtitle">
          I am a software engineer and AI enthusiast who enjoys building projects that combine creativity and technology.
        </p>
      </div>
    
  );
};

export default Home;
