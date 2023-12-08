import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const AllWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await axios.get('http://localhost:8000/workouts');
      setWorkouts(res.data);
    };
    fetchWorkouts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/workouts/${id}`);
    setWorkouts(workouts.filter((workout) => workout._id !== id));
  };
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      {workouts.map((workout) => (
        <div className="card-body " key={workout._id}>
          <h1 className="card-title">{workout.workoutName}</h1>
          <h2 className="card-title">{workout.date}</h2>
          <h4>Exercise:</h4>

          <div className="card-actions justify-start">
            <Link to={`/dashboard/viewworkout/:id`}>
              <button className="btn btn-primary">Open Workout</button>
            </Link>
            <button className="btn">Edit Workout</button>
            <button
              className="btn btn-error"
              onClick={() => handleDelete(workout._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AllWorkouts;
