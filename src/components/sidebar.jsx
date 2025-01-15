// Sidebar.js
import { Link, useLocation } from "react-router";
import { useContext, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  BookOpen,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AppRoutes } from "@/Constant/constant";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineAssignment } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import AuthContext from "@/context/Auth.context";
import { PiStudent } from "react-icons/pi";


const menuItems = [
  {
    icon: GrUserAdmin,
    name: "Admin",
    path: "/dashboard/admin",
    subItems: [
      { name: "Admin", path: "/dashboard/admin" },
    ],
  },
  {
    icon: Users,
    name: "Teachers",
    path: "/dashboard/teachers",
    subItems: [
      { name: "Teachers", path: "/dashboard/teachers" },
    ],
  },
  {
    icon: BookOpen,
    name: "Courses",
    path: "/dashboard/courses",
    subItems: [
      { name: "Courses", path: "/dashboard/courses" },
    ],
  },
  {
    icon: PiStudent,
    name: "Students",
    path: "/dashboard/students",
    subItems: [
      { name: "Students", path: "/dashboard/students" },
    ],
  },
  {
    icon: MdOutlineAssignment,
    name: "Assignment",
    path: "/dashboard/assignments",
    subItems: [
      { name: "Assignment", path: "/dashboard/assignments" },
    ],
  },
  {
    icon: VscGitPullRequestGoToChanges,
    name: "Course Request",
    path: "/dashboard/request",
    subItems: [
      { name: "Request", path: "/dashboard/request" },
    ],
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const location = useLocation();
  const [isLoading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const user = {
    name: "Admin",
    email: "adminSystem123@mail.com",
    avatar: "https://img.freepik.com/free-photo/handsome-man-thinking-with-concentration_23-2147805628.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid",
  };

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
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        console.error("Logout error:", err);
      });
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
     {/* Updated Sidebar Styles */}
<div
  className={`fixed top-0 left-0 px-3 bg-gradient-to-b from-indigo-700 to-slate-800 text-white h-screen transition-all duration-300 ease-in-out ${
    isOpen ? "w-64" : "w-20"
  }`}
>
  <div className="flex justify-between items-center p-4">
    {isOpen && <h1 className="text-2xl font-bold tracking-wide">Dashboard</h1>}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="p-2 bg-indigo-600 hover:bg-indigo-800 rounded"
    >
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
        className={`flex items-center w-full p-4 rounded transition duration-200 ${
          location.pathname.startsWith(item.path)
            ? "bg-indigo-800 text-white" // Active tab styles
            : "bg-slate-900 text-gray-300 hover:bg-indigo-600 hover:text-white" // Inactive tab styles
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
              className={`block p-2 rounded transition duration-200 ${
                location.pathname === subItem.path
                  ? "bg-indigo-800 text-white" // Active sub-item
                  : "bg-slate-900 text-gray-400 hover:bg-indigo-600 hover:text-white" // Inactive sub-item
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

  <div className={`mt-20 p-4 ${isOpen ? "border-t border-indigo-600" : ""}`}>
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
          <p className="text-xs text-gray-400">{user.email}</p>
        </div>
      )}
    </div>
    {isOpen && (
      <div className="mt-4">
        <Button
          onClick={handleLogout}
          disabled={isLoading}
          className="bg-red-600 hover:bg-red-700 text-white w-full"
        >
          {isLoading ? "Logging out..." : "Logout"}
        </Button>
      </div>
    )}
  </div>
</div>


      {/* Right Content */}
      <div className="ml-20 flex-1 overflow-y-auto p-6 md:ml-64">
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default Sidebar;

