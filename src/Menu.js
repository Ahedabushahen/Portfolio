import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => (
  <Nav className="justify-content-center bg-light py-2">
    <Nav.Link as={Link} to="/">Home</Nav.Link>
    <Nav.Link as={Link} to="/about">About</Nav.Link>
    <Nav.Link as={Link} to="/MyProjects">Projects</Nav.Link> 
    <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
  </Nav>
);

export default Menu;
