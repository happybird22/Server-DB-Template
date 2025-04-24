// Imports
import express from 'express';
import dotenv from 'dotenv';

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Midleware
app.use(express.json());

// Routes

// Error Handling Middleware

// Listeners
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
  });