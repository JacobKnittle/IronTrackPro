const db = require('../db');
module.exports = {
	getWorkouts: async (req, res) => {
		try {
			const results = await db.query('SELECT * FROM workouts');
			res.status(200).json({
				status: 'success',
				data: {
					workouts: results.rows,
				},
			});
		} catch (error) {
			console.log(error);
		}
	},
	getAWorkout: async (req, res) => {
		try {
			const results = await db.query(
				'SELECT * FROM workouts where workout_id = $1',
				[req.params.id]
			);
			res.status(200).json({
				status: 'success',
				results: results.rows.length,
				data: {
					workouts: results.rows,
				},
			});
		} catch (error) {
			console.log(error);
		}
	},
	createWorkout: async (req, res) => {
		try {
			const results = await db.query(
				'INSERT INTO workouts (workoutname) values($1) returning *',
				[req.body.workoutname]
			);

			res.status(201).json({
				status: 'Success',
				data: {
					workouts: results.rows[0],
				},
			});
		} catch (error) {
			console.log(error);
		}
	},
	updateWorkout: async (req, res) => {
		try {
			const results = await db.query(
				'UPDATE workouts SET workoutname = $1 where workout_id = $2 returning *',
				[req.body.workoutname, req.params.id]
			);

			res.status(200).json({
				status: 'Success',
				data: {
					workouts: results.rows[0],
				},
			});
		} catch (error) {
			console.log(error);
		}
	},
	deleteWorkout: async (req, res) => {
		try {
			const results = await db.query(
				'DELETE FROM workouts where workout_id = $1',
				[req.params.id]
			);
			res.status(204).json({
				status: 'success',
			});
		} catch (error) {
			console.log(error);
		}
	},
};
