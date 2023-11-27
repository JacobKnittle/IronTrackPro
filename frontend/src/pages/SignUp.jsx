import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6 max-w-md">
            Already have an account? Login{' '}
            <Link to="/login" className="underline">
              here.
            </Link>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control pb-3">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control pb-3">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <Link to="/dashboard" className="btn btn-primary">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
