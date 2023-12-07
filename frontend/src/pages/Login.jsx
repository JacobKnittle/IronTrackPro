import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login Below</h1>
          <p className="py-6 max-w-md">
            Do not have an account sign up{' '}
            <Link to="/signup" className="underline">
              here.
            </Link>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control pb-3">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                value="bob@live.com"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
                value="123"
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
