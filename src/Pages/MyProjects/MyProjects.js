import React from 'react';
import './MyProjects.css';

const Projects = () => {
  // Manually defined projects data
  const projects = [
    {
      id: 1,
      name: "Doctor-Appointment-Management-System",
      description: "nwsnb5 bmin 5hn35 popup",
      language: "PHP",
      stars: 2,
      html_url: "#" // Replace with actual URL
    },
    {
      id: 2,
      name: "FULLSTACKPROJECT",
      description: "",
      language: "HTML",
      stars: 1,
      html_url: "#" // Replace with actual URL
    },
    {
      id: 3,
      name: "Shopping-Cart",
      description: "shopping web site",
      language: "TypeScript",
      stars: 1,
      html_url: "#" // Replace with actual URL
    },
    {
      id: 4,
      name: "Portfolio",
      description: "",
      language: "JavaScript",
      stars: 0,
      html_url: "#" // Replace with actual URL
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Popular repositories</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description || "No description available"}</p>
            <div className="project-meta">
              <span className="language">{project.language}</span>
              <span className="stars">{project.stars}</span>
            </div>
            <a href={project.html_url} className="view-details-btn" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;