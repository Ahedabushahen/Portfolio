// App.js (React frontend)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioPage from './Pages/Portfolio';
import AdminPage from './Pages/Admin';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import SkillsPage from './Pages/Skills';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
