/**
 * API server — enquiries storage + admin panel API.
 * Run: cd server && npm install && npm start
 *
 * Env:
 *   ADMIN_PASSWORD   — admin login (default: admin123 for dev only)
 *   ADMIN_JWT_SECRET — JWT signing secret (set in production)
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'dev-only-change-in-production';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

const dataDir = path.join(__dirname, 'data');
const enquiriesFile = path.join(dataDir, 'enquiries.json');

function readEnquiries() {
  try {
    const raw = fs.readFileSync(enquiriesFile, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeEnquiries(list) {
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(enquiriesFile, JSON.stringify(list, null, 2), 'utf8');
}

function adminAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    jwt.verify(auth.slice(7), JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

app.use(cors());
app.use(express.json({ limit: '100kb' }));

app.post('/api/enquiries', (req, res) => {
  const { fullName, phone, email, postcode, lessonType, message } = req.body || {};
  if (!fullName || !phone || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name, phone, and email are required.',
    });
  }
  const enquiries = readEnquiries();
  const entry = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    fullName: String(fullName).trim(),
    phone: String(phone).trim(),
    email: String(email).trim(),
    postcode: String(postcode || '').trim(),
    lessonType: String(lessonType || '').trim(),
    message: String(message || '').trim(),
  };
  enquiries.push(entry);
  writeEnquiries(enquiries);
  res.status(200).json({
    success: true,
    message: "Thank you! We'll be in touch soon.",
    id: entry.id,
  });
});

app.post('/api/admin/login', (req, res) => {
  const password = req.body?.password;
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password' });
  }
  const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token });
});

app.get('/api/admin/enquiries', adminAuth, (req, res) => {
  const list = readEnquiries().sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  res.json({ enquiries: list });
});

app.get('/api/admin/stats', adminAuth, (req, res) => {
  const enquiries = readEnquiries();
  const last7 = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const recent = enquiries.filter((e) => new Date(e.createdAt).getTime() > last7).length;
  res.json({
    totalEnquiries: enquiries.length,
    last7Days: recent,
  });
});

app.listen(PORT, () => {
  console.log(`API server http://localhost:${PORT}`);
  if (ADMIN_PASSWORD === 'admin123') {
    console.warn('⚠️  Using default ADMIN_PASSWORD=admin123 — set ADMIN_PASSWORD in production');
  }
});
