// Sidebar.js
import { Link, useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { Menu, X, ChevronDown, Users, BookOpen } from "lucide-react";
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
// import { useAuth } from "@/context/Auth.context";

const menuItems = [
  {
    icon: GrUserAdmin,
    name: "Admin",
    path: "/dashboard/admin",
    subItems: [{ name: "Admin", path: "/dashboard/admin" }],
  },

 
  {
    icon: FaRegUser,
    name: "User",
    path: "/dashboard/user",
    subItems: [
      { name: "User", path: "/dashboard/user" },
      { name: "Class Resources", path: "/dashboard/user/resources" },
      { name: "Assignmenets", path: "/dashboard/user/userAssignment" },
    ],
  },
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
    icon: BookOpen,
    name: "Announcement",
    path: "/dashboard/announcement",
    subItems: [{ name: "Announcement", path: "/dashboard/announcement" }],
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const location = useLocation();
  const [isLoading, setLoading] = useState(false);
  const { user, setUser } =useContext
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(AppRoutes.getMyInfo, {
          withCredentials: true,
        });
        setUser(response.data.user);
      } catch (err) {
        console.error(
          "Error fetching user data:",
          err.response?.data || err.message
        );
      }
    };
    fetchUserData();
  }, [navigate]);
  // const dummyUser = {
  //   name: "Admin",
  //   email: "adminSystem123@mail.com",
  //   avatar: "https://img.freepik.com/free-photo/handsome-man-thinking-with-concentration_23-2147805628.jpg",
  // };

  const handleLogout = () => {
    setLoading(true);
    axios
      .get(AppRoutes.logout, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then(() => {
        Cookies.remove("token");
        navigate("/login");
      })
      .finally(() => setLoading(false));
  };

  const toggleMenu = (index) => {
    setExpandedMenu((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 px-3 bg-gradient-to-b from-indigo-700 to-slate-800 text-white h-screen transition-all ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          {isOpen && <h1 className="text-2xl font-bold">Dashboard</h1>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-indigo-600 hover:bg-indigo-800 rounded"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation */}
        <nav>
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleMenu(index)}
                className={`flex items-center bg-black w-full p-4 rounded ${
                  location.pathname.startsWith(item.path)
                    ? "bg-indigo-800 text-white"
                    : "hover:bg-indigo-600 hover:text-white"
                }`}
              >
                <item.icon size={24} />
                {isOpen && <span className="ml-3">{item.name}</span>}
                {item.subItems.length > 0 && (
                  <ChevronDown
                    className={`ml-auto ${
                      expandedMenu === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {expandedMenu === index &&
                isOpen &&
                item.subItems.map((subItem, idx) => (
                  <Link
                    to={subItem.path}
                    key={idx}
                    className={`ml-6 flex items-center p-3 ${
                      location.pathname === subItem.path
                        ? "text-indigo-400"
                        : "hover:text-white"
                    }`}
                  >
                    {subItem.name}
                  </Link>
                ))}
            </div>
          ))}
        </nav>

        {/* User Info */}
        <div className="mt-auto p-4">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={Users?.avatar} />
              <AvatarFallback>
                {Users?.name?.charAt(0).toUpperCase() || "?"}
              </AvatarFallback>
            </Avatar>
            {isOpen && (
              <div>
                <p className="font-bold">{Users?.name}</p>
                <p className="text-sm text-gray-400">{Users?.email}</p>
              </div>
            )}
          </div>
          <Button
            onClick={handleLogout}
            isLoading={isLoading}
            className="mt-4 w-full"
          >
            Logout
          </Button>
        </div>
      </div>

      <main className="ml-64 flex-1 overflow-y-auto p-6">
        {/* Main content goes here */}
      </main>
    </div>
  );
}

export default Sidebar;
