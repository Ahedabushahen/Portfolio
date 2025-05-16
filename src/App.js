// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

import Home from './Pages/Portfolio/Portfolio';

import Contact from './Pages/Contact/Contact';
import Admin from './Pages/Admin/Admin';

import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Menu />
        <div className="container my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
