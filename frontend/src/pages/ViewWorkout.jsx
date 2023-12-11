import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const ViewWorkout = () => {
	const [workout, setWorkout] = useState({});

	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchWorkout = async () => {
			const response = await axios.get(`http://localhost:8000/workouts/${id}`);
			console.log(response);
			setWorkout(response.data.data.workouts[0]);
		};
		fetchWorkout();
	}, [id]);
	return (
		<div className=' w-screen m-5'>
			<div
				className='card  bg-neutral text-neutral-content '
				key={workout.workout_id}
			>
				<div className='card-body items-center text-center'>
					<h2 className='card-title'>{workout.workoutname}</h2>
				</div>

				<button onClick={() => navigate('/dashboard')}>Home</button>
			</div>
		</div>
	);
};
export default ViewWorkout;
