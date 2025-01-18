// import { createContext, useContext, useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
// import { Navigate, useLocation } from "react-router-dom";
// import LoadingSpinner from "@/components/LoderComponents/loading";
// import { AppRoutes } from "../Constant/constant";

// // Create AuthContext
// const AuthContext = createContext();

// // AuthProvider Component
// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch user details from the backend
//   async function getUser() {
//     try {
//       const res = await axios.get(AppRoutes.getMyInfo, {
//         headers: {
//           Authorization: `Bearer ${Cookies.get("token")}`,
//         },
//       });
//       setUser(res.data.data); // Assume user data is in `res.data.data`
//     } catch (err) {
//       console.error("Error fetching user info:", err.message);
//       Cookies.remove("token");
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   }

//   // Fetch user info on initial render
//   useEffect(() => {
//     const token = Cookies.get("token");
//     if (token) {
//       getUser();
//     } else {
//       setLoading(false); // No token, no need to fetch user
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, loading }}>
//       {loading ? <LoadingSpinner /> : children}
//     </AuthContext.Provider>
//   );
// };

// // Custom Hook for easier access
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// // ProtectedRoute Component
// export const ProtectedRoute = ({ children, requiredRole }) => {
//   const { user, loading } = useAuth();
//   const location = useLocation();

//   if (loading) {
//     // Show spinner while loading user data
//     return <LoadingSpinner />;
//   }

//   if (!user) {
//     // Redirect to login if not authenticated
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }

//   if (requiredRole && user.role !== requiredRole) {
//     // Redirect unauthorized roles
//     return <Navigate to="/" replace />;
//   }

//     // Render the child components if all checks pass
//     return children;
//   };

//   return (
//     <AuthContext.Provider value={{ user, setUser, loading, ProtectedRoute }}>
//       {loading ? <LoadingSpinner /> : children}
//     </AuthContext.Provider>
//   );
// };

// // Custom Hook for easier access
// // export const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   if (context === undefined) {
// //     throw new Error('useAuth must be used within an AuthProvider');
// //   }
// //   return context;
// // };


// export default AuthContext;

// Gpt code in which error are resolved

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "@/components/LoderComponents/loading";
import { AppRoutes } from "../Constant/constant";

// Create AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user details from the backend
  async function getUser() {
    try {
      const res = await axios.get(AppRoutes.getMyInfo, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      setUser(res.data.data); // Assume user data is in `res.data.data`
    } catch (err) {
      console.error("Error fetching user info:", err.response?.data || err.message || err);
      Cookies.remove("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  // Fetch user info on initial render
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      getUser();
    } else {
      setLoading(false); // No token, no need to fetch user
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {loading ? <LoadingSpinner /> : children}
    </AuthContext.Provider>
  );
};

// Custom Hook for easier access
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// ProtectedRoute Component
export const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // Show spinner while loading user data
    return <LoadingSpinner />;
  }

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Redirect unauthorized roles
    return <Navigate to="/" replace />;
  }

  // Render the child components if all checks pass
  return children;
};

export default AuthContext;
