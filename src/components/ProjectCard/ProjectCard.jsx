import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ name, description, url, imgUrl, codeUrl }) => {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={imgUrl} alt="Profile" className="image" />
      </div>

      <div className="project-card-text">
        <h1 className="project-card-heading">{name}</h1>
        <p className="project-card-description">{description}</p>{" "}
      </div>

      <div className="project-button-container">
        <a href={url}>
          <button className="project-card-button">View Project</button>
        </a>
        <a href={codeUrl}>
          <button className="project-card-button">View Code</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
