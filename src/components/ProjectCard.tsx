import React from "react";
import { Project } from "../data/projectsData";
import "../styles/Projects.css";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-name">{project.name}</h3>
      <p className="project-date">{project.date}</p>
      <p className="project-description">{project.description}</p>
      <a
                  href={project.url}
                  className="project-url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  URL
                </a>
    </div>
  );
};

export default ProjectCard;
