import { createContext, useContext, useEffect, useState } from "react";
import { authUser, getCurrentUser } from "../api/user_api/authenticate_user";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore session on first load
  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");

    if (!storedToken) {
      setLoading(false);
      return;
    }

    getCurrentUser(storedToken)
      .then((data) => {
        // /me returns { user: {...} }
        setUser(data.user);
        setAccessToken(storedToken);
      })
      .catch((err) => {
        console.error("Failed to restore session:", err);
        localStorage.removeItem("access_token");
        setUser(null);
        setAccessToken(null);
      })
      .finally(() => setLoading(false));
  }, []);

  async function signIn(email, password) {
    const { access_token, user } = await authUser({ email, password });

    // Persist token so page refresh works
    localStorage.setItem("access_token", access_token);

    setAccessToken(access_token);
    setUser(user);
  }

  function signOut() {
    localStorage.removeItem("access_token");
    setAccessToken(null);
    setUser(null);
  }

  const value = {
    user,
    accessToken,
    loading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside an <AuthProvider>");
  }
  return ctx;
}
