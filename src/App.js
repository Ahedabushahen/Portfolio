// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Admin from './components/Admin';

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
