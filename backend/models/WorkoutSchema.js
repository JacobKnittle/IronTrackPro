const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  workoutName: String,
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [],
});

module.exports = mongoose.model('Workout', WorkoutSchema);
