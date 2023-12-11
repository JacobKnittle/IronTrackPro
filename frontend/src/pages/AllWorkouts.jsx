import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { FaExpandAlt } from 'react-icons/fa';
import { WorkoutsContext } from '../context/WorkoutsContext';
const AllWorkouts = () => {
	const { workouts, setWorkouts } = useContext(WorkoutsContext);
	const navigate = useNavigate();
	useEffect(() => {
		async function fetchData() {
			const response = await axios.get('http://localhost:8000/workouts');

			setWorkouts(response.data.data.workouts);
		}
		fetchData();
	}, []);

	const handleDelete = async (id) => {
		try {
			const response = await axios.delete(
				`http://localhost:8000/workouts/${id}`
			);
			setWorkouts(workouts.filter((workout) => workout.workout_id !== id));
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdate = async (id) => {
		navigate(`/dashboard/editworkout/${id}`);
	};

	return (
		<div className=' flex flex-1 flex-wrap m-6 gap-10'>
			{workouts &&
				workouts.map((workout) => (
					<div
						className='card w-1/3 bg-neutral text-neutral-content'
						key={workout.workout_id}
					>
						<div className='card-body items-center text-center'>
							<h2 className='card-title'>
								{workout.workoutname}{' '}
								<Link to={`/dashboard/viewworkout/${workout.workout_id}`}>
									<FaExpandAlt />
								</Link>
							</h2>
							<button
								onClick={() => handleUpdate(workout.workout_id)}
								className='btn btn-primary'
							>
								<FaEdit />
							</button>

							<h5 className='flex'>
								Exercise: <FaEdit /> <MdDelete />
							</h5>
							<button className='btn'>Add Exercise</button>
							<div className='card-actions justify-end'>
								<button
									onClick={() => handleDelete(workout.workout_id)}
									className='btn text-xl'
								>
									<MdDelete />
								</button>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};
export default AllWorkouts;
