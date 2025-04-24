// Imports
import express from 'express';
import dotenv from 'dotenv';
import db from './db/conn.mjs';

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Midleware
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
    try {
      const results = await db.collection('grades').aggregate([
        {
          $project: {
            learner_id: 1,
            class_id: 1,
            averageScore: { $avg: '$scores.score' }
          }
        }
      ]).toArray();
      
      res.json(results); // Send the result to the client
    } catch (error) {
      console.error('Aggregation error:', error);
      res.status(500).send('Something went wrong');
    }
  });   

// Error Handling Middleware
app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
  });
  
// Listeners
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
  });