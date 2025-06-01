// Admin/Admin.js
import React, { useState } from 'react';
import '../Admin/Admin.css';
import MyProjects from '../MyProjects/MyProjects';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const renderSection = () => {
    switch (activeTab) {
      case 'projects':
        return <MyProjects adminMode={true} />;
      case 'skills':
        return <Skills adminMode={true} />;
      case 'about':
        return <About adminMode={true} />;
      case 'home':
        return <Portfolio adminMode={true} />;
      case 'contact':
        return <Contact adminMode={true} />;
      default:
        return <MyProjects adminMode={true} />;
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li onClick={() => setActiveTab('projects')}>Manage Projects</li>
          <li onClick={() => setActiveTab('skills')}>Manage Skills</li>
          <li onClick={() => setActiveTab('about')}>Edit About Me</li>
          <li onClick={() => setActiveTab('home')}>Edit Home Page</li>
          <li onClick={() => setActiveTab('contact')}>Contact Messages</li>
        </ul>
      </aside>
      <main className="admin-content">
        {renderSection()}
      </main>
    </div>
  );
};

export default Admin;
