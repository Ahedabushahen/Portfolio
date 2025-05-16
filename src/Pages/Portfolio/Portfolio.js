import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the data: ', error);
        setError('Failed to fetch projects');
        setLoading(false);
      });
  }, []);

  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <h1>Ahed Abu Shahen</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to My Portfolio</h2>
          <p>I am a passionate Computer Science student and aspiring full-stack developer.</p>
          <Link to="/projects" className="cta-btn">View My Work</Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        {loading && <p>Loading projects...</p>}
        {error && <p>{error}</p>}
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={`/projects/${project.id}`} className="project-link">View Project</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Ahed Abu Shahen. All rights reserved.</p>
        <div className="socials">
          <a href="https://github.com/ahedabushahen" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ahedabushahen" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
