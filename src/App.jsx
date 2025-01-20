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
import User from "./sidebarPages/MainPages/User";
import Trainer from "./sidebarPages/MainPages/TrainerSubPages/Trainer";
import CourseDetail from "./sidebarPages/CourseDetailPage";
import { AssignmentsList } from "./sidebarPages/MainPages/TrainerSubPages/Assignments";
import Classes from "./sidebarPages/MainPages/TrainerSubPages/Classes";
import StudentPage from "./sidebarPages/Studentspage";
import ClassResourcesPage from "./components/UserComponents/ClassResources";

function App() {
  const { user } = useContext(AuthContext);

  console.log("user=>", user);
  console.log("token=>", Cookies.get("token"));

  return (
    <Route
      path="/dashboard"
      element={user ? <DashboardLayout /> : <Navigate to="/login" />}
    >
      <Route index element={<Navigate to="teachers" replace />} />
      <Route path="teachers" element={<TeacherPage />} />
      <Route path="courses" element={<CoursePage />} />
      <Route path="courses/:courseId" element={<CourseDetail />} />

      <Route path="user">
        <Route index element={<StudentPage />} />
        <Route path="resources" element={<ClassResourcesPage />} />
      </Route>

      <Route path="trainer">
        <Route index element={<Trainer />} />
        <Route path="assignments" element={<AssignmentsList />} />
        <Route path="classes" element={<Classes />} />
      </Route>

      <Route path="admin" element={<Adminpage />} />
      <Route path="request" element={<CourseRequests />} />
    </Route>
  );
}

export default App;
