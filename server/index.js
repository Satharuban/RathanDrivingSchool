/**
 * Placeholder Express server — ready to connect to PostgreSQL.
 * Run: node server/index.js
 * Enquiry submissions can be stored in DB once configured.
 */

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Placeholder: replace with PostgreSQL insert when DB is set up
app.post('/api/enquiries', (req, res) => {
  const { fullName, phone, email, postcode, lessonType, message } = req.body;
  // TODO: validate, then save to PostgreSQL
  console.log('Enquiry received:', { fullName, email, lessonType });
  res.status(200).json({ success: true, message: "Thank you! We'll be in touch soon." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
