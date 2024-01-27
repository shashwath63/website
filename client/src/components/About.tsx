import React from "react";
import { useNavigate } from "react-router-dom";


const About= () => {
  const navigate = useNavigate();
  return (
    <div className="about-page">
      <h1>About me</h1>

      <p>Hi, I'm Shashwath !</p>

      <div className="links">
        <a href="https://github.com/shashwath63" target="_blank">
          <button>GitHub</button>
        </a>
        <a href={import.meta.env.VITE_RESUME_LINK} target="_blank">
          <button>Resume</button>
        </a>
        <button onClick={() => navigate("/projects")}>Projects</button>
      </div>
    </div>
  );
};

export default About;
