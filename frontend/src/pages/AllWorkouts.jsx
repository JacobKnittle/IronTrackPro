import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const AllWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await axios.get('http://localhost:8000/workouts');
      setWorkouts(res.data);
    };
    fetchWorkouts();
  }, [workouts]);

  const handleDeleteWorkout = async (id) => {
    await axios.delete(`http://localhost:8000/workouts/${id}`);
    setWorkouts(workouts.filter((workout) => workout._id !== id));
  };

  const handleDeleteExercise = async (id) => {};
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      {workouts.map((workout) => (
        <div className="card-body " key={workout._id}>
          <h1 className="card-title">{workout.workoutName}</h1>
          <h2 className="card-title">{workout.date}</h2>
          {workout.exercises.map((exercise, index) => (
            <h4 key={index}>
              {`${exercise.exerciseName} : `}
              <Link to={`/dashboard/editexercise/${workout._id}}`}>
                <button>
                  <FaEdit />
                </button>
              </Link>
              <button>
                <MdDelete />
              </button>
            </h4>
          ))}

          <div className="card-actions justify-start">
            <Link to={`/dashboard/addexercise/${workout._id}`}>
              <button className="btn btn-primary">Add Exercise</button>
            </Link>
            <Link to={`/dashboard/viewworkout/${workout._id}`}>
              <button className="btn btn-primary">Open Workout</button>
            </Link>
            <Link to={`/dashboard/editworkout/${workout._id}`}>
              <button className="btn">Edit Workout</button>
            </Link>
            <button
              className="btn btn-error"
              onClick={() => handleDeleteWorkout(workout._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AllWorkouts;
