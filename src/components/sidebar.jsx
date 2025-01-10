 
// import { Link, useLocation } from "react-router";
// import { useContext, useState } from "react";
// import {
//   Menu,
//   X,
//   ChevronRight,
//   ChevronDown,
//   Users,
//   BookOpen,
//   Dumbbell,
// } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { AppRoutes } from "@/Constant/constant";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { AuthContext } from "@/context/Auth.context";
// import { useNavigate } from "react-router";

// const menuItems = [
//   {
//     icon: Dumbbell,
//     name: "Admin",
//     path: "/dashboard/admin",
//     subItems: [
//       { name: "Admin", path: "/dashboard/admin" },
//       // { name: "Add Student", path: "/admin/students/add" },
//     ],
//   },
//   {
//     icon: Users,
//     name: "Teachers",
//     path: "/dashboard/teachers",
//     subItems: [
//       { name: "Teachers", path: "/dashboard/teachers" },
//       // { name: "Add Teacher", path: "/admin/teachers/add" },
//     ],
//   },
//   {
//     icon: BookOpen,
//     name: "Courses",
//     path: "/dashboard/courses",
//     subItems: [
//       { name: "Courses", path: "/dashboard/courses" },
//       // { name: "Add Course", path: "/admin/courses/add" },
//     ],
//   },
//   {
//     icon: Dumbbell,
//     name: "Students",
//     path: "/dashboard/students",
//     subItems: [
//       { name: "Students", path: "/dashboard/students" },
//       // { name: "Add Student", path: "/admin/students/add" },
//     ],
//   },
 
// ];

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [expandedMenu, setExpandedMenu] = useState(null); // Track expanded dropdown
//   const location = useLocation();
//   const [isLoading, setLoading] = useState(false);
//   const { setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const user = {
//     name: "John Doe",
//     email: "john@example.com",
//     avatar: "/avatars/john-doe.png",
//   };

//   // Logout Handler
//   const handleLogout = () => {
//     setLoading(true);
//     axios
//       .get(
//         AppRoutes.LogOut,
//         {},
//         { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
//       )
//       .then(() => {
//         setLoading(false);
//         Cookies.remove("token");
//         setUser(null);
//         console.log("Logout successful");
//         navigate("/login");
//       })
//       .catch((err) => {
//         setLoading(false);
//         console.error("Logout error:", err);
//       });
//   };

//   return (
//     <div
//       className={`top-0 left-0 px-3  bg-gray-800 text-white h-screen ${
//         isOpen ? "w-64" : "w-20"
//       } transition-all duration-300 ease-in-out`}
//     >
//       <div className="flex justify-between items-center p-4">
//         {isOpen && <h1 className="text-2xl font-bold">Dashboard</h1>}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="p-2 bg-gray-700"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       <nav>
//         {menuItems.map((item, index) => (
//           <div key={index} className="mb-2">
//             {/* Main Menu Item */}
//             <button
//               onClick={() =>
//                 setExpandedMenu(expandedMenu === index ? null : index)
//               }
//               className={`flex items-center w-full text-blue-500 p-4 hover:bg-white ${
//                 location.pathname.startsWith(item.path) ? "bg-gray-700" : ""
//               }`}
//             >
//               <item.icon size={24} />
//               {isOpen && (
//                 <span className="ml-4 flex-1">{item.name}</span>
//               )}
//               {isOpen && (
//                 <ChevronDown
//                   size={16}
//                   className={`transition-transform ${
//                     expandedMenu === index ? "rotate-180" : ""
//                   }`}
//                 />
//               )}
//             </button>

//             {/* Submenu Items */}
//             {expandedMenu === index && isOpen && (
//               <div className="ml-8 mt-2">
//                 {item.subItems.map((subItem) => (
//                   <Link
//                     key={subItem.name}
//                     to={subItem.path}
//                     className={`block text-zinc-300 p-2 hover:bg-white ${
//                       location.pathname === subItem.path ? "bg-gray-700" : ""
//                     }`}
//                   >
//                     {subItem.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </nav>

//       <div className={`mt-48   p-4 ${isOpen ? "border-t border-gray-700" : ""}`}>
//         <div className="flex items-center">
//           <Avatar>
//             <AvatarImage src={user.avatar} alt={user.name} />
//             <AvatarFallback>
//               {user.name
//                 .split(" ")
//                 .map((n) => n[0])
//                 .join("")
//                 .toUpperCase()}
//             </AvatarFallback>
//           </Avatar>
//           {isOpen && (
//             <div className="ml-3">
//               <p className="text-sm font-medium">{user.name}</p>
//               <p className="text-xs text-zinc-400">{user.email}</p>
//             </div>
//           )}
//         </div>
//         {isOpen && (
//           <div className="mt-4">
//             <Button onClick={handleLogout} disabled={isLoading}>
//               {isLoading ? "Logging out..." : "Logout"}
//             </Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

// Sidebar.js
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
import { GrUserAdmin } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";


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
    icon: PiStudentBold,
    name: "Students",
    path: "/dashboard/students",
    subItems: [
      { name: "Students", path: "/dashboard/students" },
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
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/john-doe.png",
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
      <div
        className={`fixed top-0 left-0 px-3 bg-gray-800 text-white h-screen transition-all duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          {isOpen && <h1 className="text-2xl font-bold">Dashboard</h1>}
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
                        location.pathname === subItem.path
                          ? "bg-gray-700"
                          : ""
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

        <div className={`mt-48 p-4 ${isOpen ? "border-t border-gray-700" : ""}`}>
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

      {/* Right Content */}
       <div className="m flex-1 overflow-y-auto p-6 md:ml-64">
      </div> 
    </div>
  );
}

export default Sidebar;
