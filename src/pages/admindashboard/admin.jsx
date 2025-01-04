import Sidebar from "./admincomp/Sidebar";
import TeacherCards from "./admincomp/TeacherCards";
import StudentCards from "./admincomp/StudentCards";
import CourseCards from "./admincomp/CourseCards";
import AddModal from "./admincomp/addmodal";
import { useState } from "react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("teachers");
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <Sidebar setActiveTab={setActiveTab} />


      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 ml-64">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold capitalize">{activeTab}</h2>
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add {activeTab.slice(0, -1)}
          </button>
        </div>
        {activeTab === "teachers" && <TeacherCards />}
        {activeTab === "students" && <StudentCards />}
        {activeTab === "courses" && <CourseCards />}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <AddModal
          activeTab={activeTab}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
