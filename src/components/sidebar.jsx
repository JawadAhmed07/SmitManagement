// Sidebar.js
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  BookOpen,
} from "lucide-react";

import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineAssignment } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { PiStudent } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AppRoutes } from "@/Constant/constant";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { FaRegUser } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

const menuItems = [
  {
    icon: GrUserAdmin,
    name: "Admin",
    path: "/dashboard/admin",
    subItems: [{ name: "Admin", path: "/dashboard/admin" }],
  },
  // {
  //   icon: FaRegUser,
  //   name: "User",
  //   path: "/dashboard/user",
  //   subItems: [
  //     { name: "User", path: "/dashboard/user" },
  //   ],
  // },
 
  // {
  //   icon: FaRegUser,
  //   name: "User",
  //   path: "/dashboard/user",
  //   subItems: [
  //     { name: "User", path: "/dashboard/user" },
  //   ],
  // },
  {
    icon: LiaChalkboardTeacherSolid,
    name: "Trainer",
    path: "/dashboard/trainer",
    subItems: [
      { name: "Add", path: "/dashboard/trainer" },
      { name: "Classes", path: "/dashboard/trainer/classes" },
      { name: "Assignments", path: "/dashboard/trainer/assignments" },
    ],
  },
  {
    icon: Users,
    name: "Teachers",
    path: "/dashboard/teachers",
    subItems: [{ name: "Teachers", path: "/dashboard/teachers" }],
  },
  {
    icon: BookOpen,
    name: "Courses",
    path: "/dashboard/courses",
    subItems: [{ name: "Courses", path: "/dashboard/courses" }],
  },
  {
    icon: PiStudent,
    name: "Students",
    path: "/dashboard/students",
    subItems: [{ name: "Students", path: "/dashboard/students" }],
  },
  {
    icon: MdOutlineAssignment,
    name: "Assignment",
    path: "/dashboard/assignments",
    subItems: [{ name: "Assignment", path: "/dashboard/assignments" }],
  },
  {
    icon: VscGitPullRequestGoToChanges,
    name: "Course Request",
    path: "/dashboard/request",
    subItems: [{ name: "Request", path: "/dashboard/request" }],
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const location = useLocation();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const dummyUser = {
    name: "Admin",
    email: "adminSystem123@mail.com",
    avatar: "https://img.freepik.com/free-photo/handsome-man-thinking-with-concentration_23-2147805628.jpg",
  };

  const handleLogout = () => {
    setLoading(true);
    axios
      .get(AppRoutes.logout, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then(() => {
        setLoading(false);
        Cookies.remove("token");
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        console.error("Logout error:", err);
      });
  };

  const toggleMenu = (index) => {
    setExpandedMenu((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 px-3 bg-gradient-to-b from-indigo-700 to-slate-800 text-white h-screen transition-all duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-20"
        }`}
        aria-label="Sidebar"
      >
        <div className="flex justify-between items-center p-4">
          {isOpen && (
            <h1 className="text-2xl font-bold tracking-wide truncate">
              Dashboard
            </h1>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-indigo-600 hover:bg-indigo-800 rounded"
            aria-label="Toggle Sidebar"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav aria-label="Main Navigation">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => toggleMenu(index)}
                className={`flex items-center w-full p-4 rounded transition duration-200 ${
                  location.pathname.startsWith(item.path)
                    ? "bg-indigo-800 text-white"
                    : "bg-slate-900 text-gray-300 hover:bg-indigo-600 hover:text-white"
                }`}
                aria-expanded={expandedMenu === index}
                aria-controls={`menu-${index}`}
              >
                <item.icon size={24} />
                {isOpen && (
                  <span className="ml-4 flex-1 truncate">{item.name}</span>
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

              {expandedMenu === index && isOpen && (
                <div id={`menu-${index}`} className="ml-8 mt-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className={`block p-2 rounded transition duration-200 ${
                        location.pathname === subItem.path
                          ? "bg-indigo-800 text-white"
                          : "bg-slate-900 text-gray-400 hover:bg-indigo-600 hover:text-white"
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

        <div
          className={`mt-20 p-4 ${isOpen ? "border-t border-indigo-600" : ""}`}
        >
          <div className="flex items-center">
            <Avatar>
              <AvatarImage
                src={dummyUser.avatar || "https://via.placeholder.com/150"}
                alt={dummyUser.name || "User"}
              />
              <AvatarFallback>
                {dummyUser.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {isOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium">{dummyUser.name}</p>
                <p className="text-xs text-gray-400">{dummyUser.email}</p>
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
