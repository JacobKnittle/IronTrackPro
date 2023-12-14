const Workout = require('../models/WorkoutSchema');

module.exports = {
  getWorkouts: async (req, res) => {
    try {
      const workouts = await Workout.find();
      res.send(workouts);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  getAWorkout: async (req, res) => {
    try {
      const workout = await Workout.findById(req.params.id);

      res.send(workout);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  postWorkout: async (req, res) => {
    try {
      const newWorkout = new Workout(req.body);
      const savedWorkout = await newWorkout.save();
      res.send(savedWorkout);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  updateWorkout: async (req, res) => {
    const { id } = req.params;
    const { workoutName } = req.body;
    const updatedWorkout = await Workout.findByIdAndUpdate(
      id,
      { workoutName },
      { new: true }
    );
    res.send(updatedWorkout);
  },
  deleteWorkout: async (req, res) => {
    try {
      await Workout.findByIdAndDelete(req.params.id);
      res.status(200).send('Post deleted');
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};
