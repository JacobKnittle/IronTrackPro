// import axios from 'axios';

// import { useNavigate, useParams } from 'react-router-dom';

// const AddExercise = () => {
//   const { id } = useParams();
//   const [exercise, setExercise] = useState({
//     _id: id,
//     exerciseName: '',
//   });
//   const handleChange = (e) => {
//     setExercise({ ...exercise, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:8000/exercises', exercise);
//     navigate('/dashboard');
//   };
//   const navigate = useNavigate();
//   return (
//     <div className="hero min-h-screen bg-base-200">
//       <div className="hero-content flex-col ">
//         <div className="text-center lg:text-left">
//           <h1 className="text-4xl font-bold">Add Exercise</h1>
//         </div>
//         <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//           <form className="card-body" onSubmit={handleSubmit}>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Add Exercise Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Exercise"
//                 className="input input-bordered"
//                 name="exerciseName"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-control">
//               <label className="label"></label>
//             </div>
//             <div className="form-control mt-3">
//               <button className="btn btn-primary" type="submit">
//                 Add Exercise
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AddExercise;
