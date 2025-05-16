import React from 'react';
import './Portfolio.css';
import profile from '../../assets/profile.png'; // Make sure to add a profile image in /assets

useEffect(() => {
  fetch('http://localhost:5000/api/projects')
    .then(res => res.json())
    .then(data => setProjects(data));
}, []);


const Portfolio = () => {
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
    </div>
  );
};

export default Portfolio;
