const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE_PATH = process.env.DATA_FILE_PATH || './data/projects.json';

// In-memory array for contact submissions
const contactSubmissions = [];

app.use(cors());
app.use(express.json());

// B1: Health Check
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Helper to get projects
const getProjects = () => {
  try {
    const dataPath = path.resolve(__dirname, DATA_FILE_PATH);
    const fileData = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading projects data:', error);
    return [];
  }
};

// B2: GET /api/projects
app.get('/api/projects', (req, res) => {
  const projects = getProjects();
  res.status(200).json(projects);
});

// B3: GET /api/projects/:id
app.get('/api/projects/:id', (req, res) => {
  const projects = getProjects();
  const projectId = parseInt(req.params.id, 10);
  const project = projects.find((p) => p.id === projectId);

  if (project) {
    res.status(200).json(project);
  } else {
    res.status(404).json({ error: 'Project not found' });
  }
});

// B4: POST /api/contact
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name) return res.status(400).json({ error: 'Name is required' });
  if (!email) return res.status(400).json({ error: 'Email is required' });
  if (!email.includes('@')) return res.status(400).json({ error: 'Invalid email format' });
  if (!message) return res.status(400).json({ error: 'Message is required' });

  const submission = { name, email, message, date: new Date().toISOString() };
  contactSubmissions.push(submission);

  res.status(201).json({ message: 'Submission successful', data: submission });
});

// B5: GET /api/contact
app.get('/api/contact', (req, res) => {
  res.status(200).json(contactSubmissions);
});

// B6: Centralized Error Handling & 404s
// Catch-all 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global Express error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
