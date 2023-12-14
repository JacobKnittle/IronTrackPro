const express = require('express');
const router = express.Router();
const ExerciseController = require('../controllers/ExerciseController');

router.get('/', ExerciseController.getExercises);

router.get('/:id', ExerciseController.getAExercise);

router.post('/', ExerciseController.postExercise);

router.put('/:id', ExerciseController.updateExercise);

router.delete('/:id', ExerciseController.deleteExercise);

module.exports = router;
