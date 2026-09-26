import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import AuthModal from "../components/shared/auth/AuthModal";

// Blocks a route until the user is signed in — home stays open
const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [authMode, setAuthMode] = useState(null);

  if (!user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-base-200 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-[#23BE0A]">Book Vibe</h1>
        <p className="mt-4 text-lg text-base-content/70 max-w-md">
          Sign in to unlock books, book details and your dashboard.
        </p>
        <div className="mt-8 flex gap-4">
          <button
            className="btn bg-[#23BE0A] text-white px-8"
            onClick={() => setAuthMode("login")}
          >
            Sign In
          </button>
          <button
            className="btn bg-[#59C6D2] text-white px-8"
            onClick={() => setAuthMode("signup")}
          >
            Sign Up
          </button>
        </div>
        {authMode && (
          <AuthModal
            key={authMode}
            mode={authMode}
            onClose={() => setAuthMode(null)}
          />
        )}
      </div>
    );
  }

  return children;
};

export default RequireAuth;