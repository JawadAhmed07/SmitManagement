// import { useContext } from "react";
// import { Navigate } from "react-router";
// import { AuthContext } from "../../context/Auth.context";

// // General authenticated route
// export const ProtectedRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);

//   if (!user) {
//     // Redirect to login if not authenticated
//     return <Navigate to="/login" replace />;
//   }

//   // Redirect to role selection if role is not defined
//   if (!user.role) {
//     return <Navigate to="/select" replace />;
//   }

//   return children;
// };

// // Role-based redirection route
// export const RoleBasedRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);

//   if (!user) {
//     // Redirect to login if not authenticated
//     return <Navigate to="/login" replace />;
//   }

//   // Redirect based on user role
//   switch (user.role) {
//     case "trainer":
//       return <Navigate to="/admin" replace />;
//     case "admin":
//       return <Navigate to="/admin" replace />;
//     case "student":
//       return <Navigate to="/admin" replace />;
//     default:
//       return <Navigate to="/select" replace />;
//   }
// };

// // Student-specific route
// export const StudentRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);

//   if (!user) {
//     // Redirect to login if not authenticated
//     return <Navigate to="/login" replace />;
//   }

//   if (user.role !== "student") {
//     // Redirect unauthorized roles
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };
