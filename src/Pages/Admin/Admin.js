import React, { useState, useEffect } from 'react';
import './Admin.css';

const defaultProjects = [
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

const defaultSkills = [
  { name: 'React', level: 90 },
  { name: 'Angular', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML & CSS', level: 98 },
  { name: 'MongoDB', level: 70 },
  { name: 'Git & GitHub', level: 85 }
];

const defaultAbout = {
  text: "👋 Hi! I'm Ahed Abu Shahen, a passionate Computer Science student and future full-stack developer."
};

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  // Data states
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [about, setAbout] = useState(defaultAbout);
  const [messages, setMessages] = useState([]);

  // Form states
  const [newProject, setNewProject] = useState({ name: '', description: '', language: '', stars: 0, html_url: '' });
  const [editProjectId, setEditProjectId] = useState(null);
  const [newSkill, setNewSkill] = useState({ name: '', level: 0 });
  const [editSkillName, setEditSkillName] = useState(null);
  const [aboutEdit, setAboutEdit] = useState('');
  const [replyMessage, setReplyMessage] = useState('');

  useEffect(() => {
    setProjects(JSON.parse(localStorage.getItem('adminProjects')) || defaultProjects);
    setSkills(JSON.parse(localStorage.getItem('adminSkills')) || defaultSkills);
    setAbout(JSON.parse(localStorage.getItem('adminAbout')) || defaultAbout);
    setMessages(JSON.parse(localStorage.getItem('contactMessages')) || []);
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem('adminProjects', JSON.stringify(projects));
  }, [projects]);
  useEffect(() => {
    localStorage.setItem('adminSkills', JSON.stringify(skills));
  }, [skills]);
  useEffect(() => {
    localStorage.setItem('adminAbout', JSON.stringify(about));
  }, [about]);
  useEffect(() => {
    localStorage.setItem('contactMessages', JSON.stringify(messages));
  }, [messages]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === '123456') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials!');
    }
  };

  // Projects CRUD
  const addProject = (e) => {
    e.preventDefault();
    setProjects([...projects, { ...newProject, id: Date.now() }]);
    setNewProject({ name: '', description: '', language: '', stars: 0, html_url: '' });
  };
  const deleteProject = (id) => setProjects(projects.filter(p => p.id !== id));
  const startEditProject = (project) => {
    setEditProjectId(project.id);
    setNewProject(project);
  };
  const saveEditProject = (e) => {
    e.preventDefault();
    setProjects(projects.map(p => p.id === editProjectId ? { ...newProject, id: editProjectId } : p));
    setEditProjectId(null);
    setNewProject({ name: '', description: '', language: '', stars: 0, html_url: '' });
  };

  // Skills CRUD
  const addSkill = (e) => {
    e.preventDefault();
    setSkills([...skills, { ...newSkill }]);
    setNewSkill({ name: '', level: 0 });
  };
  const deleteSkill = (name) => setSkills(skills.filter(s => s.name !== name));
  const startEditSkill = (skill) => {
    setEditSkillName(skill.name);
    setNewSkill(skill);
  };
  const saveEditSkill = (e) => {
    e.preventDefault();
    setSkills(skills.map(s => s.name === editSkillName ? { ...newSkill } : s));
    setEditSkillName(null);
    setNewSkill({ name: '', level: 0 });
  };

  // About CRUD
  const saveAbout = (e) => {
    e.preventDefault();
    setAbout({ text: aboutEdit });
    setAboutEdit('');
  };

  // Messages
  const respondToMessage = (idx) => {
    const updated = [...messages];
    updated[idx].responded = true;
    setMessages(updated);
  };

  // Dashboard summary cards
  const Dashboard = () => (
    <div>
      <h1>Welcome back, <span className="admin-name">Admin</span></h1>
      <div className="dashboard-stats">
        <div className="stat-card projects">Projects <span>{projects.length}</span></div>
        <div className="stat-card messages">Messages <span>{messages.length}</span></div>
        <div className="stat-card blog">Skills <span>{skills.length}</span></div>
        <div className="stat-card testimonials">About <span>1</span></div>
      </div>
      <div className="quick-actions">
        <button onClick={() => setActivePage('projects')}>Manage Projects</button>
        <button onClick={() => setActivePage('skills')}>Manage Skills</button>
        <button onClick={() => setActivePage('about')}>Edit About</button>
        <button onClick={() => setActivePage('messages')}>Respond Messages</button>
      </div>
    </div>
  );

  // Projects page
  const ProjectsPage = () => (
    <section>
      <h2>Projects</h2>
      <form onSubmit={editProjectId ? saveEditProject : addProject} className="admin-form">
        <input placeholder="Name" value={newProject.name} onChange={e => setNewProject({ ...newProject, name: e.target.value })} required />
        <input placeholder="Description" value={newProject.description} onChange={e => setNewProject({ ...newProject, description: e.target.value })} required />
        <input placeholder="Language" value={newProject.language} onChange={e => setNewProject({ ...newProject, language: e.target.value })} required />
        <input placeholder="Stars" type="number" value={newProject.stars} onChange={e => setNewProject({ ...newProject, stars: e.target.value })} required />
        <input placeholder="GitHub URL" value={newProject.html_url} onChange={e => setNewProject({ ...newProject, html_url: e.target.value })} required />
        <button type="submit">{editProjectId ? "Save" : "Add Project"}</button>
        {editProjectId && <button type="button" onClick={() => { setEditProjectId(null); setNewProject({ name: '', description: '', language: '', stars: 0, html_url: '' }); }}>Cancel</button>}
      </form>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            <b>{p.name}</b> - {p.language} - <a href={p.html_url} target="_blank" rel="noopener noreferrer">GitHub</a>
            <button onClick={() => startEditProject(p)}>Edit</button>
            <button onClick={() => deleteProject(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );

  // Skills page
  const SkillsPage = () => (
    <section>
      <h2>Skills</h2>
      <form onSubmit={editSkillName ? saveEditSkill : addSkill} className="admin-form">
        <input placeholder="Skill Name" value={newSkill.name} onChange={e => setNewSkill({ ...newSkill, name: e.target.value })} required />
        <input placeholder="Level (0-100)" type="number" value={newSkill.level} onChange={e => setNewSkill({ ...newSkill, level: e.target.value })} required min="0" max="100" />
        <button type="submit">{editSkillName ? "Save" : "Add Skill"}</button>
        {editSkillName && <button type="button" onClick={() => { setEditSkillName(null); setNewSkill({ name: '', level: 0 }); }}>Cancel</button>}
      </form>
      <ul>
        {skills.map(s => (
          <li key={s.name}>
            <b>{s.name}</b> - {s.level}%
            <button onClick={() => startEditSkill(s)}>Edit</button>
            <button onClick={() => deleteSkill(s.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );

  // About page
  const AboutPage = () => (
    <section>
      <h2>Edit About</h2>
      <form onSubmit={saveAbout} className="admin-form">
        <textarea
          rows={5}
          value={aboutEdit}
          onChange={e => setAboutEdit(e.target.value)}
          placeholder={about.text}
          required
        />
        <button type="submit">Save</button>
      </form>
      <div className="about-preview">
        <h3>Preview:</h3>
        <p>{about.text}</p>
      </div>
    </section>
  );

  // Messages page
  const MessagesPage = () => (
    <section>
      <h2>Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {messages.map((msg, idx) => (
            <li key={idx}>
              <b>{msg.firstName} {msg.lastName}</b> ({msg.email}): {msg.message}
              {msg.responded ? (
                <span style={{ color: 'green', marginLeft: 10 }}>Responded</span>
              ) : (
                <button style={{ marginLeft: 10 }} onClick={() => respondToMessage(idx)}>Mark as Responded</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );

  return (
    <div className="admin-container">
      {!isAuthenticated ? (
        <form className="admin-login-form" onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div className="admin-dashboard-main">
          {/* Sidebar */}
          <aside className="admin-sidebar">
            <h2>Admin Panel</h2>
            <ul>
              <li className={activePage === 'dashboard' ? 'active' : ''} onClick={() => setActivePage('dashboard')}>Dashboard</li>
              <li className={activePage === 'projects' ? 'active' : ''} onClick={() => setActivePage('projects')}>Projects</li>
              <li className={activePage === 'skills' ? 'active' : ''} onClick={() => setActivePage('skills')}>Skills</li>
              <li className={activePage === 'about' ? 'active' : ''} onClick={() => setActivePage('about')}>About</li>
              <li className={activePage === 'messages' ? 'active' : ''} onClick={() => setActivePage('messages')}>Messages</li>
            </ul>
            <button className="signout-btn" onClick={() => setIsAuthenticated(false)}>Sign Out</button>
          </aside>

          {/* Main Content */}
          <main className="admin-dashboard-content">
            {activePage === 'dashboard' && <Dashboard />}
            {activePage === 'projects' && <ProjectsPage />}
            {activePage === 'skills' && <SkillsPage />}
            {activePage === 'about' && <AboutPage />}
            {activePage === 'messages' && <MessagesPage />}
          </main>
        </div>
      )}
    </div>
  );
};

export default Admin;