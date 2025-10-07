import React from "react";
import { projects } from "../data/projectsData";
import ProjectCard from "../components/Projectcard";
import "../styles/Projects.css";

const Projects: React.FC = () => {
  return (
    < >
      <section className="projects-section">
        <h2 className="projects-title">My Projects</h2>
      <div className="projects-container"> 
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  </>
  );
};

export default Projects;
