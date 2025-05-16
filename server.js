// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy project data
const projects = [
  { id: 1, title: "Portfolio Website", description: "React based personal site" },
  { id: 2, title: "E-commerce App", description: "Online store using Angular & Node" },
  { id: 3, title: "Task Manager", description: "Simple app to track your tasks" }
];

// Routes
app.get('/', (req, res) => {
  res.send('✅ Portfolio API is live');
});

// Get all projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Get single project by ID
app.get('/api/projects/:id', (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = projects.find(p => p.id === projectId);
  
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: '❌ Project not found' });
  }
});

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ message: '❌ Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
