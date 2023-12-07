const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to DB!'))
  .catch((error) => console.log(error.message));

const ExerciseSchema = new mongoose.Schema({
  exerciseName: String,
  sets: [
    {
      reps: Number,
      weight: Number,
    },
  ],
});
const WorkoutSchema = new mongoose.Schema({
  workoutName: String,
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [],
});

const Workout = mongoose.model('Workout', WorkoutSchema);
const Exercise = mongoose.model('Exercise', ExerciseSchema);

app.get('/workouts', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.send(workouts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/workouts/:id', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    res.send(workout);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/workouts', async (req, res) => {
  try {
    const newWorkout = new Workout(req.body);
    const savedWorkout = await newWorkout.save();
    res.send(savedWorkout);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/workouts/:id', async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.status(200).send('Post deleted');
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(8000, () => console.log('Server is running on Port 8000'));
