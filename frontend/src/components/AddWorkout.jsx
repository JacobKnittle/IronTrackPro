import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { WorkoutsContext } from '../context/WorkoutsContext';
const AddWorkout = () => {
	const navigate = useNavigate();
	const [workoutName, setWorkoutName] = useState('');
	const { addWorkout } = useContext(WorkoutsContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8000/workouts', {
				workoutname: workoutName,
			});
			addWorkout(response.data.data.workouts);
			navigate('/dashboard');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col '>
				<div className='text-center lg:text-left'>
					<h1 className='text-4xl font-bold'>Add Workout</h1>
				</div>
				<div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<form className='card-body' onSubmit={handleSubmit}>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Add Type of Workout</span>
							</label>
							<input
								type='text'
								placeholder='Workout Type'
								className='input input-bordered'
								name='workoutName'
								onChange={(e) => setWorkoutName(e.target.value)}
								required
							/>
						</div>

						<div className='form-control'>
							<label className='label'></label>
						</div>
						<div className='form-control mt-3'>
							<button className='btn btn-primary' type='submit'>
								Start Workout
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default AddWorkout;
