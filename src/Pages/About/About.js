import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          👋 Hi! I'm <strong>Ahed Abu Shahen</strong>, a passionate Computer Science student and future full-stack developer.
          <br /><br />
          I love building beautiful, functional websites and solving challenging coding problems. I'm always learning new technologies to improve myself and help others.
          <br /><br />
          When I’m not coding, I enjoy volunteering, reading, and exploring new ideas 💡.
        </p>
        <div className="about-boxes">
          <div className="about-box">
            <h3>🎓 Education</h3>
            <p>Studying B.Sc. in Computer Science</p>
          </div>
          <div className="about-box">
            <h3>💼 Goals</h3>
            <p>Become a software engineer & build a happy family.</p>
          </div>
          <div className="about-box">
            <h3>🛠️ Skills</h3>
            <p>React, JavaScript, Angular, Node.js, CSS, HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
