// src/Pages/Portfolio/Portfolio.js

import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import profile from '../../assets/profile.jpg';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/projects`;

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to fetch projects:', err));
  }, []);

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        <div className="intro-text">
          <h1>Hello, I'm <span className="highlight">Ahed</span></h1>
          <h2 className="animated-text">Web Developer | Designer | Creator</h2>
          <p>
            Welcome to my personal portfolio website. Here you can learn more about my skills, projects, and how to contact me.
          </p>
          <a href="#contact" className="btn">Let's Connect</a>
        </div>
        <div className="intro-image">
          <img src={profile} alt="Profile" />
        </div>
      </div>

      {/* Render project list */}
      {projects.length > 0 && (
        <div className="projects-section">
          <h2>Projects</h2>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>{project.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
