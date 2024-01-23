// Projects.jsx

import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of project 1...</p>
        <a href="https://github.com/shashwath63/next-signup-login"target="_blank">GitHub</a>
        <a href="https://website.com">Live Project</a>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Description of project 2...</p>
        <a href="https://github.com/shashwath63/movieView"target="_blank">GitHub</a>
        <a href="https://website.com">Live Project</a>
      </div>
      // Add more projects...
    </div>
  );
};

export default Projects;
