import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(gym.jpg)',
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Iron Track Pro</h1>
          <p className="mb-5">
            Iron Track Pro is a health and fitness app designed for individuals
            and trainers who want a organized and modern way to track their
            progress.
          </p>
          <Link to="/signup">
            <button className="btn btn-primary mr-16">Get Started</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
