import { Link, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Menu, X, ChevronDown, Users, BookOpen, Dumbbell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AppRoutes } from "@/Constant/constant";
import axios from "axios";
import Cookies from "js-cookie";
import { AuthContext } from "@/context/Auth.context";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    icon: Users,
    name: "Teachers",
    path: "/admin/teachers",
    subItems: [{ name: "Teachers", path: "/admin/teachers" }],
  },
  {
    icon: BookOpen,
    name: "Courses",
    path: "/admin/courses",
    subItems: [{ name: "Courses", path: "/admin/courses" }],
  },
  {
    icon: Dumbbell,
    name: "Students",
    path: "/admin/students",
    subItems: [{ name: "Students", path: "/admin/students" }],
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const location = useLocation();
  const [isLoading, setLoading] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("token");
        const response = await axios.get(AppRoutes.getMyInfo, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserInfo(response.data.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching user info:", err);
        setError("Failed to load user information");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = () => {
    setLoading(true);
    axios
      .get(
        AppRoutes.LogOut,
        {},
        { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
      )
      .then(() => {
        setLoading(false);
        Cookies.remove("token");
        setUser(null);
        console.log("Logout successful");
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        console.error("Logout error:", err);
      });
  };

  return (
    <div
      className={`top-0 left-0 px-3 bg-gray-800 text-white h-screen ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center p-4">
        {isOpen && <h1 className="text-2xl font-bold">Admin</h1>}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav>
        {menuItems.map((item, index) => (
          <div key={index} className="mb-2">
            <button
              onClick={() =>
                setExpandedMenu(expandedMenu === index ? null : index)
              }
              className={`flex items-center w-full text-blue-500 p-4 hover:bg-white ${
                location.pathname.startsWith(item.path) ? "bg-gray-700" : ""
              }`}
            >
              <item.icon size={24} />
              {isOpen && <span className="ml-4 flex-1">{item.name}</span>}
              {isOpen && (
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    expandedMenu === index ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {expandedMenu === index && isOpen && (
              <div className="ml-8 mt-2">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.path}
                    className={`block text-zinc-300 p-2 hover:bg-white ${
                      location.pathname === subItem.path ? "bg-gray-700" : ""
                    }`}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className={`mt-72 p-4 ${isOpen ? "border-t border-gray-700" : ""}`}>
        {isLoading ? (
          <p>Loading user information...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : userInfo ? (
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src={userInfo.avatar} alt={userInfo.fullName} />
              <AvatarFallback>
                {userInfo.fullName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {isOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium">{userInfo.fullName}</p>
                <p className="text-xs text-zinc-400">{userInfo.email}</p>
              </div>
            )}
          </div>
        ) : null}
        {isOpen && (
          <div className="mt-4">
            <Button onClick={handleLogout} disabled={isLoading}>
              {isLoading ? "Logging out..." : "Logout"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
