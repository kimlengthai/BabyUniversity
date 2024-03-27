import express from 'express';
import open from 'open';
import router from './route.js';
import cors from 'cors';

// Start the server
const PORT = process.env.PORT || 3000;

// Create an Express application
const app = express();
app.use(express.json());

// Enable CORS
app.use(cors());

// Use your router
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  // Open the browser
  //open(`http://localhost:${PORT}`);
});