// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MyProjects from './Pages/MyProjects/MyProjects'; 

import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

import Home from './Pages/Portfolio/Portfolio';

import Contact from './Pages/Contact/Contact';
import Admin from './Pages/Admin/Admin';
import About from './Pages/About/About';
import { AppProvider } from './AppContext';
import Skills from './Pages/Skills/Skills';
// import './App.css'; // Import your CSS file for styling


function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Menu />
        <div className="container my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/MyProjects" element={<MyProjects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AppProvider>
  );
}

// export default App;
export default App;
// This code sets up a React application with routing using React Router.
// It includes a header, menu, and footer, and defines routes for different pages like Home, About, Projects, Skills, Contact, and Admin.
// The AppProvider component is used to provide context to the application.