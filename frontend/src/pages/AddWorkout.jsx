import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AddWorkout = () => {
  const [workout, setWorkout] = useState({
    workoutName: '',
  });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/workouts', workout);
    navigate('/dashboard');
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Add Workout</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add Type of Workout</span>
              </label>
              <input
                type="text"
                placeholder="Workout Type"
                className="input input-bordered"
                name="workoutName"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="label"></label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary" type="submit">
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
