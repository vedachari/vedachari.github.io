// src/pages/Home.tsx
import React from "react";
import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-section">
      
      {/* Intro Section */}
      <section id="home" className="home-intro">
        <h1 className="home-title">Veda Chari</h1>
        <p className="home-subtitle">
          I am a software engineer and AI enthusiast who enjoys building projects that combine creativity and technology.
        </p>
      </section>
    </div>
  );
};

export default Home;
