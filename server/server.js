const express = require('express');
const cors = require('cors');

const port = 5173;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from index route');
});

app.get('/protected', (req, res) => {
    res.send('Hello from protected route');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});