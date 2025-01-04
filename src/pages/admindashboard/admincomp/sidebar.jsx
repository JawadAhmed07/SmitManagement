/* eslint-disable react/prop-types */
function Sidebar({ setActiveTab }) {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
      <nav className="space-y-4">
        <button
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded"
          onClick={() => setActiveTab("teachers")}
        >
          Teachers
        </button>
        <button
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded"
          onClick={() => setActiveTab("students")}
        >
          Students
        </button>
        <button
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded"
          onClick={() => setActiveTab("courses")}
        >
          Courses
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
// build make
