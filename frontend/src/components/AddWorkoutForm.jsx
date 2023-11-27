export default function AddWorkoutForm() {
  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form>
        <div className="form-control my-4">
          <input
            type="text"
            placeholder="Exercise"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control my-4">
          <input
            type="text"
            placeholder="Weight"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control my-4">
          <input
            type="text"
            placeholder="Reps"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Start</button>
        </div>
      </form>
    </div>
  );
}
