import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-toastify";

const AuthModal = ({ mode, onClose }) => {
  const [tab, setTab] = useState(mode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, signup } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (tab === "signup") {
        await signup(name.trim(), email, password);
        toast.success("Account created! You can sign in now.");
        setTab("login");
        setName("");
        setPassword("");
      } else {
        const loggedInUser = await login(email, password);
        const displayName =
          loggedInUser?.user_metadata?.full_name || loggedInUser?.email;
        toast.success(`Welcome, ${displayName}!`);
        onClose();
      }
    } catch (error) {
      let message = error?.json?.msg || error?.message || "Something went wrong";
      if (import.meta.env.DEV && error instanceof TypeError) {
        message =
          "Netlify Identity runs on the deployed site — test login after deploying.";
      }
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-sm">
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="font-bold text-xl text-center">
          {tab === "login" ? "Sign In" : "Sign Up"}
        </h3>

        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
          {tab === "signup" && (
            <input
              type="text"
              className="input w-full"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            className="input w-full"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input w-full"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            autoComplete={
              tab === "signup" ? "new-password" : "current-password"
            }
          />
          <button
            type="submit"
            className="btn bg-[#59C6D2] text-white mt-2"
            disabled={loading}
          >
            {loading
              ? "Please wait…"
              : tab === "login"
                ? "Sign In"
                : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          {tab === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                className="link text-[#1a9ba5]"
                onClick={() => setTab("signup")}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="link text-[#1a9ba5]"
                onClick={() => setTab("login")}
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={onClose}>
          close
        </button>
      </form>
    </dialog>
  );
};

export default AuthModal;