export default function LandingPage() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Iron Track Pro is a health and fitness app designed for individuals
            and trainers who want a organized and modern way to track their
            progress.
          </p>
          <button className="btn btn-primary mr-16">Get Started</button>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
}
