import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../context/Auth.context";

// ProtectedRoute: Ensures only authenticated users can access the route
export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace  />;
  }

  return children;
};

// AuthenticatedUser: Redirects authenticated users away from login/signup
export const AuthenticatedUser = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    // Redirect to the home page if already authenticated
    return <Navigate to="/admin" replace />;
  }

  return children;
};

// AdminRoute: Ensures only admins (or trainers in your case) can access the route
export const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== "trainer") {
    // Redirect to home if the user's role is not "trainer"
    return <Navigate to="/" replace />;
  }

  return children;
};
