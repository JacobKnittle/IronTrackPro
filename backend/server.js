const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const workoutRoutes = require('./routes/WorkoutRoutes');
const exerciseRoutes = require('./routes/ExerciseRoutes');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to DB!'))
  .catch((error) => console.log(error.message));

app.use('/workouts', workoutRoutes);
app.use('/exercises', exerciseRoutes);

app.listen(8000, () => console.log('Server is running on Port 8000'));
