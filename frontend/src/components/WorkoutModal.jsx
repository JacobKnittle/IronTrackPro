import AddWorkoutForm from './AddWorkoutForm';

export default function WorkoutModal() {
  const openModal = () => {
    const modal = document.getElementById('workoutmodal');
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('workoutmodal');
    if (modal) {
      modal.close();
    }
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>
        Add Workout
      </button>
      <dialog id="workoutmodal" className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}>
            ✕
          </button>
          <h3 className="font-bold text-lg">Start New Workout</h3>
          <AddWorkoutForm />
        </div>
      </dialog>
    </div>
  );
}
