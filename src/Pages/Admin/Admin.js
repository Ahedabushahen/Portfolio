import React, { useState, useEffect } from 'react';
import './Admin.css';

// Import your existing components
import About from '../About/About';
import Skills from '../Skills/Skills';
import MyProjects from '../MyProjects/MyProjects';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [activePage, setActivePage] = useState('dashboard');

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    setMessages(storedMessages);
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === '123456') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials!');
    }
  };

  // Dashboard summary cards
  const Dashboard = () => (
    <div>
      <h1>Welcome back, <span className="admin-name">Admin</span></h1>
      <div className="dashboard-stats">
        <div className="stat-card projects">Projects <span>3</span></div>
        <div className="stat-card messages">Messages <span>{messages.length}</span></div>
        <div className="stat-card blog">Skills <span>7</span></div>
        <div className="stat-card testimonials">About <span>1</span></div>
      </div>
      <div className="quick-actions">
        <button onClick={() => setActivePage('projects')}>Go to Projects</button>
        <button onClick={() => setActivePage('skills')}>Go to Skills</button>
        <button onClick={() => setActivePage('about')}>Go to About</button>
        <button onClick={() => setActivePage('messages')}>Go to Messages</button>
      </div>
    </div>
  );

  // Messages page
  const Messages = () => (
    <div>
      <h2>📨 Submitted Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {messages.map((msg, idx) => (
            <li key={idx}>
              <strong>{msg.firstName} {msg.lastName}</strong> ({msg.email}): {msg.message}
            </li>
          ))}
        </ul>
      )}
    </div>
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
            {activePage === 'projects' && <MyProjects />}
            {activePage === 'skills' && <Skills />}
            {activePage === 'about' && <About />}
            {activePage === 'messages' && <Messages />}
          </main>
        </div>
      )}
    </div>
  );
};

export default Admin;