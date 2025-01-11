import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { AppRoutes } from "../Constant/constant";
import LoadingSpinner from "@/components/LoderComponents/loading";

// AuthContext provides user state and methods to interact with user data.
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getUser() {
    try {
      const res = await axios.get(AppRoutes.getMyInfo, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      setUser(res.data.data);
    } catch (err) {
      console.error("Error fetching user info:", err);
      Cookies.remove("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const token = Cookies.get("token");
    if (token && !user) {
      getUser();
    } else {
      setLoading(false); // No token, no need to fetch
    }
  }, []);

  // Render the loader while fetching data
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
