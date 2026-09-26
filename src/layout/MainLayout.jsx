import { useContext, useState } from "react";
import Navbar from "../components/shared/navbar/Navbar";
import { Outlet } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import AuthModal from "../components/shared/auth/AuthModal";

const MainLayout = () => {
  const { user } = useContext(AuthContext);
  const [authMode, setAuthMode] = useState(null);

  // Everything is locked until the user signs in
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-[#23BE0A]">Book Vibe</h1>
        <p className="mt-4 text-lg text-base-content/70 max-w-md">
          Sign in to unlock the home page, books, book details and your
          dashboard.
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

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
