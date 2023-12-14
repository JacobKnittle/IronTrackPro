const express = require('express');
const router = express.Router();
const WorkoutController = require('../controllers/WorkoutController');

router.get('/', WorkoutController.getWorkouts);

router.get('/:id', WorkoutController.getAWorkout);

router.post('/', WorkoutController.postWorkout);

router.put('/:id', WorkoutController.updateWorkout);

router.delete('/:id', WorkoutController.deleteWorkout);

module.exports = router;
