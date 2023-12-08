import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const ViewWorkout = () => {
  const [workout, setWorkout] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkout = async () => {
      const res = await axios.get(`http://localhost:8000/workouts/${id}`);
      setWorkout(res.data);
    };
    fetchWorkout();
  }, [id]);
  return (
    <div>
      <div className="card-body ">
        <h1 className="card-title">{workout.workoutName}</h1>
        <h2 className="card-title">{workout.date}</h2>
        <h4>Exercise:</h4>
      </div>
      <button onClick={() => navigate('/dashboard')}>Home</button>
    </div>
  );
};
export default ViewWorkout;
