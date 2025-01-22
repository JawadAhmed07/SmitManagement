import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Cookies from "js-cookie"; // Import for token management
import "./App.css";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/login_signup/login";
import TeacherPage from "./sidebarPages/teacherpage";
import CoursePage from "./sidebarPages/course";
import DashboardLayout from "./layouts/dashboardlayout";
import Adminpage from "./sidebarPages/MainPages/Adminpage";
import { AuthContext } from "./context/Auth.context";
import CourseRequests from "./sidebarPages/Requests";
import Trainer from "./sidebarPages/MainPages/TrainerSubPages/Trainer";
import CourseDetail from "./sidebarPages/CourseDetailPage";
import { AssignmentsList } from "./sidebarPages/MainPages/TrainerSubPages/Assignments";
import Classes from "./sidebarPages/MainPages/TrainerSubPages/Classes";
import StudentPage from "./sidebarPages/Studentspage";
import RoleCards from "./pages/select/select";
import student from "./sidebarPages/MainPages/StudentSubPages/Student";
import ClassResourcesPage from "./sidebarPages/MainPages/StudentSubPages/ClassResources";
import ClassAnnouncement from "./sidebarPages/MainPages/StudentSubPages/ClassAnnouncement";
import Student from "./sidebarPages/MainPages/StudentSubPages/Student";
import { ClassAssignment } from "./sidebarPages/MainPages/StudentSubPages/ClassAssignment";

function App() {
  const { student } = useContext(AuthContext);

  console.log("student=>", student);
  console.log("token=>", Cookies.get("token"));

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      {/* <Route
        path="/login"
        element={student ? <Navigate to="/dashboard/student" /> : <Login />}
      /> */}
      <Route path="/select" element={<RoleCards />} />

      {/* Dashboard Routes */}
      <Route
        path="/dashboard"
        element={<DashboardLayout />} >
      
        {/* Admin Sub-Routes */}
        <Route index element={<Navigate to="teachers" replace />} />
        <Route path="teachers" element={<TeacherPage />} />
        <Route path="courses" element={<CoursePage />} />
        <Route path="courses/:courseId" element={<CourseDetail />} />
        <Route path="students" element={<StudentPage />} />

        <Route path="trainer" element={<Trainer />} />
        <Route path="trainer/assignments" element={<AssignmentsList />} />
        <Route path="trainer/classes" element={<Classes />} />

        <Route path="admin" element={<Adminpage />} />
        <Route path="request" element={<CourseRequests />} />

        <Route path="student" element={<Student />} />
        <Route path="student/resources" element={<ClassResourcesPage />} />
        <Route path="student/classAnnouncement" element={<ClassAnnouncement />} />
        <Route path="student/assignment" element={<ClassAssignment />} />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
