import React from 'react';
import './MyProjects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Doctor-Appointment-Management-System",
      description: "Appointment Management System that allows patients to book appointments with doctors.",
      language: "PHP",
      stars: 2,
      html_url: "https://github.com/Ahedabushahen/Doctor-Appointment-Management-System" 
    },
    {
      id: 2,
      name: "Shopping-Cart",
      description: "shopping web site",
      language: "TypeScript",
      stars: 1,
      html_url: "https://github.com/Ahedabushahen/Shopping-Cart" 
    },
    {
      id: 3,
      name: "Portfolio",
      description: "Who is Ahed Abu Shahen",
      language: "JavaScript",
      stars: 0,
      html_url: "https://github.com/Ahedabushahen/Portfolio" 
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Popular repositories</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description || "No description available"}</p>
              <div className="project-meta">
                <span className="language">{project.language}</span>
                <span className="stars">★ {project.stars}</span>
              </div>
              <a href={project.html_url} className="view-details-btn" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// This code defines a React component that displays a list of projects.
// Each project has a name, description, programming language, star count, and a link to its GitHub repository.