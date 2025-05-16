// src/Menu.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => (
  <Nav className="justify-content-center bg-light py-3" variant="pills">
    <Nav.Item>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default Menu;
