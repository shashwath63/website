import React from "react";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About me</h1>

      <p>Hi, I'm Shashwath !</p>

      <div className="links">
        <a href="https://github.com/shashwath63"target="_blank">GitHub</a>
        <a href="https://johnDoe.com/resume.pdf">Resume</a>
        <a href="/projects">Projects</a>
      </div>  
    </div>
  );
};

export default About;
