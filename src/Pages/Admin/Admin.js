import React, { useState, useEffect } from 'react';
import './Admin.css';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);

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
        <div className="admin-dashboard">
          <h2>📨 Submitted Contact Messages</h2>
          {messages.length === 0 ? (
            <p>No messages yet.</p>
          ) : (
            <ul>
              {messages.map((msg, idx) => (
                <li key={idx}>
                  <strong>{msg.name}</strong> ({msg.email}): {msg.message}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
// Admin.css

