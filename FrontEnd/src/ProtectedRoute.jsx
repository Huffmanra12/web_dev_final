// FrontEnd/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function ProtectedRoute({ redirectTo = "/login" }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Checking session...</div>;
  }

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}
