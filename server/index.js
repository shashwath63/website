const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// MongoDB model
const Contact = mongoose.model('Contact', contactSchema);

// Route to handle POST request
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    message,
  });

  try {
    await newContact.save();
    res.status(200).send('Contact information saved successfully');
  } catch (error) {
    console.error('Error saving contact information', error);
    res.status(500).send('Failed to save contact information');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
