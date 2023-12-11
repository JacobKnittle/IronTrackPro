import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const EditWorkout = () => {
	const [workoutName, setWorkoutName] = useState('');
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchWorkout = async () => {
			const response = await axios.get(`http://localhost:8000/workouts/${id}`);
			console.log(response);
			setWorkoutName(response.data.data.workouts.workoutname);
		};
		fetchWorkout();
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios.put(`http://localhost:8000/workouts/${id}`, {
			workoutname: workoutName,
		});
		navigate('/dashboard');
	};

	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col '>
				<div className='text-center lg:text-left'>
					<h1 className='text-4xl font-bold'>Edit Exercise</h1>
				</div>
				<div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<form className='card-body' onSubmit={handleSubmit}>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Exercise Name</span>
							</label>
							<input
								type='text'
								placeholder='Exercise'
								className='input input-bordered'
								name='exerciseName'
								onChange={(e) => setWorkoutName(e.target.value)}
								required
							/>
						</div>

						<div className='form-control'>
							<label className='label'></label>
						</div>
						<div className='form-control mt-3'>
							<button className='btn btn-primary' type='submit'>
								Edit Workout
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default EditWorkout;
