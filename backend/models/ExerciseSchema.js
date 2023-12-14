const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  exerciseName: String,
  sets: [],
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
