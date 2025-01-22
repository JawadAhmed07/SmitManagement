import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./context/Auth.context";
import Cookies from "js-cookie";
import "./App.css";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/login_signup/login";
import TeacherPage from "./sidebarPages/teacherpage";
import CoursePage from "./sidebarPages/course";
import DashboardLayout from "./layouts/dashboardlayout";
import Adminpage from "./sidebarPages/MainPages/Adminpage";
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
  const { user } = useContext(AuthContext);

    return (
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route path="/select" element={<RoleCards />} />

        {/* Dashboard Routes */}
        <Route
          path="/dashboard"
          element={user ? <DashboardLayout /> : <Navigate to="/login" />}
        >
          {/* Admin Sub-Routes */}
          <Route index element={<Navigate to="user" replace />} />
          <Route path="teachers" element={<TeacherPage />} />
          <Route path="courses" element={<CoursePage />} />
          <Route path="courses/:courseId" element={<CourseDetail />} />
          <Route path="students" element={<StudentPage />} />
          <Route path="trainer" element={<Trainer />} />
          <Route path="trainer/assignments" element={<AssignmentsList />} />
          <Route path="trainer/classes" element={<Classes />} />
          <Route path="admin" element={<Adminpage />} />
          <Route path="request" element={<CourseRequests />} />
          <Route path="user" element={<user />} />
          <Route path="user/resources" element={<ClassResourcesPage />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
}

export default App;
