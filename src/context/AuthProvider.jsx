import { createContext, useState } from "react";
import GoTrue from "gotrue-js";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// Netlify Identity endpoint — lives on the deployed site (same origin)
const auth = new GoTrue({
  APIUrl: `${window.location.origin}/.netlify/identity`,
  audience: "",
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return auth.currentUser();
    } catch {
      return null;
    }
  });

  const signup = async (name, email, password) => {
    const response = await auth.signup(email, password, {
      full_name: name,
    });
    return response;
  };

  const login = async (email, password) => {
    const loggedInUser = await auth.login(email, password, true);
    setUser(loggedInUser);
    return loggedInUser;
  };

  const logout = async () => {
    const currentUser = auth.currentUser();
    try {
      if (currentUser) {
        await currentUser.logout();
      }
    } finally {
      setUser(null);
    }
  };

  const data = { user, signup, login, logout };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;