import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'React', level: 90 },
  { name: 'Angular', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML & CSS', level: 98 },
  { name: 'MongoDB', level: 70 },
  { name: 'Git & GitHub', level: 85 }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-title">{skill.name}</div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${skill.level}%` }}>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
