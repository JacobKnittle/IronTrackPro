const Exercise = require('../models/ExerciseSchema');
const Workout = require('../models/WorkoutSchema');

module.exports = {
  getExercises: async (req, res) => {
    try {
      const exercises = await Exercise.find();
      res.send(exercises);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  getAExercise: async (req, res) => {
    try {
      const exercise = await Exercise.findById(req.params.id);
      res.send(exercise);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  postExercise: async (req, res) => {
    try {
      const { _id } = req.body;
      const newExercise = new Exercise(req.body);

      const workout = await Workout.findOne({ _id: _id });
      workout.exercises.push(newExercise);
      const addedExerciseToWorkout = await workout.save();
      console.log(addedExerciseToWorkout);
      res.send(addedExerciseToWorkout);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  updateExercise: async (req, res) => {
    const { id } = req.params;
    const { exerciseName } = req.body;
    try {
      const updatedExercise = await Exercise.findByIdAndUpdate(
        id,
        { exerciseName },
        { new: true }
      );
      res.send(updatedExercise);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  deleteExercise: async (req, res) => {
    try {
      await Workout.findByIdAndDelete(req.params.id);
      res.status(200).send('Post deleted');
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};
