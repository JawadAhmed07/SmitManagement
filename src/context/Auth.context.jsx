import { AppRoutes } from "@/Constant/constant";
import axios from "axios";
import Cookies from "js-cookie";
import { createContext,useState,useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const token = Cookies.get("token"); // Retrieve token from cookies

    if (!token) {
      console.warn("No token found. Redirecting to login.");
      return;
    }

    try {
      const response = await axios.get(AppRoutes.getMyInfo, {
        headers: {
          Authorization: `Bearer ${token}`, // Add token to headers
        },
      });

      setUser(response.data.data); // Save user data in state
      console.log("Profile fetched:", response.data.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
