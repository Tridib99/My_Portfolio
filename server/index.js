import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.set('strictQuery', false);
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log(`🍃 Connected to MongoDB Compass / MongoDB local instance at ${MONGODB_URI}`);
    seedDatabaseIfEmpty();
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err.message);
  });

// --- Mongoose Schemas & Models --- //

const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, default: 'No Subject' },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: '/images/projects/my-img.png' },
  category: { type: String, required: true },
  technologies: [String],
  github: String,
  link: String
});

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String, required: true },
  percentage: { type: Number, default: 80 }
});

const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);
const Project = mongoose.model('Project', projectSchema);
const Skill = mongoose.model('Skill', skillSchema);

// --- Database Auto-Seeding --- //
const defaultProjects = [
  {
    title: 'DevPulse Dashboard',
    description: 'Real-time modern analytics dashboard built for monitoring server metrics, database load, and microservices status.',
    image: '/images/projects/my-img.png',
    category: 'Web Apps',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/example/devpulse',
    link: 'https://example.com/devpulse'
  },
  {
    title: 'HyperStore E-Commerce Platform',
    description: 'High-performance digital marketplace featuring instant search, secure payment integration, cart management, and admin dashboard.',
    image: '/images/projects/my-img2.png',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    github: 'https://github.com/example/hyperstore',
    link: 'https://example.com/hyperstore'
  },
  {
    title: 'Aesthetic UI System',
    description: 'A modular, highly customizable dark-themed React UI library with built-in animations, smooth micro-interactions, and gradient backgrounds.',
    image: '/images/projects/my-img.png',
    category: 'UI Components',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com/example/aesthetic-ui',
    link: 'https://example.com/aesthetic-ui'
  },
  {
    title: 'AI Prompt & Task Workflow Hub',
    description: 'Productivity application enabling teams to automate workflows, manage prompt pipelines, and integrate AI assistant endpoints.',
    image: '/images/projects/my-img2.png',
    category: 'Web Apps',
    technologies: ['React', 'Vite', 'Node.js', 'OpenAI API', 'Tailwind CSS'],
    github: 'https://github.com/example/prompt-hub',
    link: 'https://example.com/prompt-hub'
  }
];

const defaultSkills = [
  { name: 'React.js', category: 'Frontend', level: 'Expert', percentage: 95 },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Expert', percentage: 92 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Expert', percentage: 90 },
  { name: 'TypeScript', category: 'Frontend', level: 'Advanced', percentage: 85 },
  { name: 'Node.js & Express', category: 'Backend & APIs', level: 'Advanced', percentage: 88 },
  { name: 'MongoDB & Mongoose', category: 'Backend & APIs', level: 'Expert', percentage: 92 },
  { name: 'RESTful APIs', category: 'Backend & APIs', level: 'Expert', percentage: 92 },
  { name: 'Git & GitHub', category: 'Tools & DevOps', level: 'Advanced', percentage: 88 },
  { name: 'Vite & Build Tools', category: 'Tools & DevOps', level: 'Advanced', percentage: 85 },
  { name: 'Figma to Code', category: 'Design', level: 'Advanced', percentage: 82 }
];

async function seedDatabaseIfEmpty() {
  try {
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      await Project.insertMany(defaultProjects);
      console.log('🌱 Seeded initial projects into MongoDB!');
    }

    const skillCount = await Skill.countDocuments();
    if (skillCount === 0) {
      await Skill.insertMany(defaultSkills);
      console.log('🌱 Seeded initial skills into MongoDB!');
    }
  } catch (error) {
    console.error('Error seeding database:', error.message);
  }
}

// --- API Routes --- //

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    uri: MONGODB_URI,
    timestamp: new Date().toISOString()
  });
});

// Personal Info API
app.get('/api/info', (req, res) => {
  res.json({
    name: 'ASUS Developer',
    title: 'Full-Stack Software Engineer',
    email: 'contact@example.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA',
    tagline: 'Building high-performance modern web apps and scalable backends with MongoDB.',
    bio: [
      'I am a passionate software engineer with hands-on experience building clean, responsive user interfaces with React and robust RESTful APIs with Node.js, Express, and MongoDB.',
      'From crafting intuitive frontends to optimizing database queries and schemas in MongoDB Compass, I take pride in delivering complete full-stack web solutions.'
    ]
  });
});

// Projects API
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ _id: 1 });
    res.json(projects.length > 0 ? projects : defaultProjects);
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    res.json(defaultProjects);
  }
});

// Skills API
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ _id: 1 });
    res.json(skills.length > 0 ? skills : defaultSkills);
  } catch (error) {
    console.error('Error fetching skills:', error.message);
    res.json(defaultSkills);
  }
});

// Submit Contact Form API (Saves to MongoDB)
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please fill in all required fields (Name, Email, Message).'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid email address.'
    });
  }

  try {
    const newContactMessage = new ContactMessage({
      name,
      email,
      subject: subject || 'No Subject',
      message
    });

    const savedMessage = await newContactMessage.save();
    console.log(`[MongoDB] New message saved to database from ${name} (${email}) - ID: ${savedMessage._id}`);

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been saved to MongoDB.',
      data: savedMessage
    });
  } catch (error) {
    console.error('Error saving contact message to MongoDB:', error.message);
    return res.status(500).json({
      success: false,
      error: 'Failed to save message to database. Please try again.'
    });
  }
});

// Retrieve Contact Messages API (for inspection)
app.get('/api/contact', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, messages });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Express backend server running on http://localhost:${PORT}`);
  console.log(`🍃 Target MongoDB URI for MongoDB Compass: ${MONGODB_URI}`);
});
