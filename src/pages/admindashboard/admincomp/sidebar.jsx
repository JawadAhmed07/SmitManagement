import { CardTitle } from "@/components/ui/card";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import { CiViewTimeline } from "react-icons/ci";

/* eslint-disable react/prop-types */
function Sidebar({ setActiveTab }) {
  return (
  <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6">
  <div className="text-center mb-8">
    <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
  </div>
  <nav className="space-y-6">
    <button
      className="flex items-center w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-all duration-200"
      onClick={() => setActiveTab("teachers")}
    >
      <span className="material-icons text-lg mr-3"><LiaChalkboardTeacherSolid/></span>
      Teachers
    </button>
    <button
      className="flex items-center w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-all duration-200"
      onClick={() => setActiveTab("students")}
    >
      <span className="material-icons text-lg mr-3"><PiStudent/></span>
      Students
    </button>
    <button
      className="flex items-center w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-all duration-200"
      onClick={() => setActiveTab("courses")}
    >
      <span className="material-icons text-lg mr-3"><CiViewTimeline/></span>
      Courses
    </button>
  </nav>
</div>

  );
}

export default Sidebar;
// build make
