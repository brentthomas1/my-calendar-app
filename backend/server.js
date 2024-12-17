console.log('Server script started');


const express = require('express');
const cors = require('cors');

// Create a new Express application
const app = express();

// Allow cross-origin requests (this lets your frontend talk to your backend)
app.use(cors());

// This lets the server understand data sent in JSON format
app.use(express.json());

// A test endpoint: When someone visits http://localhost:5000/api/hello
// your server will send back a message.
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
