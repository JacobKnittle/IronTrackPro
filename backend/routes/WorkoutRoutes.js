const express = require('express');
const router = express.Router();
const workoutControllers = require('../controllers/workoutControllers');

router.get('/workouts', workoutControllers.getWorkouts);
router.get('/workouts/:id', workoutControllers.getAWorkout);

router.post('/workouts', workoutControllers.createWorkout);

router.put('/workouts/:id', workoutControllers.updateWorkout);

router.delete('/workouts/:id', workoutControllers.deleteWorkout);

module.exports = router;
