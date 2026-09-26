const Errorpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-lg">
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-error">404</h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-base-content">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-base-content/70">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a href="/" className="btn btn-success text-black">
            Go Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-success text-black"
          >
            Go Back
          </button>
        </div>

        {/* Illustration (optional emoji/icon) */}
        <div className="mt-10 text-7xl opacity-100">🚧</div>
      </div>
    </div>
  );
};

export default Errorpage;
