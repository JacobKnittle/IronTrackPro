import Navbar from '../components/Navbar';
import WorkoutModal from '../components/WorkoutModal';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <h1>Workouts:</h1>
      <WorkoutModal />
    </div>
  );
}
