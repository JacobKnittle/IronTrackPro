// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// const EditWorkout = () => {
//   const [workout, setWorkout] = useState({
//     exerciseName: '',
//   });
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchWorkout = async () => {
//       const res = await axios.get(`http://localhost:8000/exercises/${id}`);
//       setWorkout(res.data);
//     };
//     fetchWorkout();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:8000/workouts/${id}`, workout);
//     navigate('/dashboard');
//   };

//   const handleChange = (e) => {
//     setWorkout({ ...workout, [e.target.name]: e.target.value });
//   };
//   return (
//     <div className="hero min-h-screen bg-base-200">
//       <div className="hero-content flex-col ">
//         <div className="text-center lg:text-left">
//           <h1 className="text-4xl font-bold">Add Workout</h1>
//         </div>
//         <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//           <form className="card-body" onSubmit={handleSubmit}>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Edit Workout Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Workout"
//                 className="input input-bordered"
//                 name="workoutName"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-control">
//               <label className="label"></label>
//             </div>
//             <div className="form-control mt-3">
//               <button className="btn btn-primary" type="submit">
//                 Edit Workout
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default EditWorkout;
