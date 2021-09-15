import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

import Joke from './models/jokeModel.js';

const app = express();
dotenv.config();

// -- MIDDLEWARE
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

//Routes
app.get('/', (req, res) => res.send('API is running...'));

//Get random joke
app.get('/api/jokes', async (req, res) => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const body = await response.text();
  console.log(body);
  res.json(body);
});

//Get all categories
app.get('/api/jokes/categories', async (req, res) => {
  const response = await fetch('https://api.chucknorris.io/jokes/categories');
  const body = await response.text();
  console.log(body);
  res.json(body);
});

//Starting server
// -- CONNECTING TO DB
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log('Connected to MONGO DB');
    // start server
    app.listen(PORT, () => console.log(`Server is runing on port ${PORT}`));
  });
