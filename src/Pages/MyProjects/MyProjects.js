// src/Pages/projects/Projects.js
import React, { useEffect, useState } from 'react';
import './MyProjects.css';


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetching data from GitHub API
    fetch('https://api.github.com/users/Ahedabushahen/repos')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error fetching GitHub projects:', err));
  }, []);

  return (
    <div className="projects-container">
      <h2 className="projects-title">My GitHub Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description || "No description available"}</p>
            <a href={project.html_url} className="view-details-btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
