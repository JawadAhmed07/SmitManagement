 
import { Link, useLocation } from "react-router";
import { useContext, useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Users,
  BookOpen,
  Dumbbell,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AppRoutes } from "@/Constant/constant";
import axios from "axios";
import Cookies from "js-cookie";
import { AuthContext } from "@/context/Auth.context";
import { useNavigate } from "react-router";

const menuItems = [
  {
    icon: Users,
    name: "Teachers",
    path: "/admin/teachers",
    subItems: [
      { name: "Teachers", path: "/admin/teachers" },
      // { name: "Add Teacher", path: "/admin/teachers/add" },
    ],
  },
  {
    icon: BookOpen,
    name: "Courses",
    path: "/admin/courses",
    subItems: [
      { name: "Courses", path: "/admin/courses" },
      // { name: "Add Course", path: "/admin/courses/add" },
    ],
  },
  {
    icon: Dumbbell,
    name: "Students",
    path: "/admin/students",
    subItems: [
      { name: "Students", path: "/admin/students" },
      // { name: "Add Student", path: "/admin/students/add" },
    ],
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedMenu, setExpandedMenu] = useState(null); // Track expanded dropdown
  const location = useLocation();
  const [isLoading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/john-doe.png",
  };

  // Logout Handler
  const handleLogout = () => {
    setLoading(true);
    axios
      .get(
        AppRoutes.logout,
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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav>
        {menuItems.map((item, index) => (
          <div key={index} className="mb-2">
            {/* Main Menu Item */}
            <button
              onClick={() =>
                setExpandedMenu(expandedMenu === index ? null : index)
              }
              className={`flex items-center w-full text-blue-500 p-4 hover:bg-white ${
                location.pathname.startsWith(item.path) ? "bg-gray-700" : ""
              }`}
            >
              <item.icon size={24} />
              {isOpen && (
                <span className="ml-4 flex-1">{item.name}</span>
              )}
              {isOpen && (
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    expandedMenu === index ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {/* Submenu Items */}
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
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {isOpen && (
            <div className="ml-3">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-zinc-400">{user.email}</p>
            </div>
          )}
        </div>
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
