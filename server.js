// backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Fake data
const projects = [
  { id: 1, title: "Portfolio Website", description: "React based personal site" },
  { id: 2, title: "E-commerce App", description: "Online store using Angular & Node" },
  { id: 3, title: "Task Manager", description: "Simple app to track your tasks" }
];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Portfolio API');
});

// RESTful API - Projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
