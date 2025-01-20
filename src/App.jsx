import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./App.css";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/login_signup/login";
import RoleCards from "./pages/select/select";
import TeacherPage from "./sidebarPages/teacherpage";
import CoursePage from "./sidebarPages/course";
import DashboardLayout from "./layouts/dashboardlayout";
import Adminpage from "./sidebarPages/MainPages/Adminpage";
// import { AuthContextProvider } from "./context/Auth.context";
import CourseRequests from "./sidebarPages/Requests";
import User from "./sidebarPages/MainPages/UserSubPages/User";
import Trainer from "./sidebarPages/MainPages/TrainerSubPages/Trainer";
import { AssignmentsList } from "./sidebarPages/MainPages/TrainerSubPages/Assignments";
import Classes from "./sidebarPages/MainPages/TrainerSubPages/Classes";
import StudentPage from "./sidebarPages/Studentspage";
import ClassResourcesPage from "./sidebarPages/MainPages/UserSubPages/ClassResources";
import ClassAssignment from "./sidebarPages/MainPages/UserSubPages/ClassAssignment";
import Students from "./sidebarPages/MainPages/TrainerSubPages/Students";

function App() {
  return (
    // <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select" element={<RoleCards />} />

        {/* Protected Routes for Admin/Trainer */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Admin Sub-Routes */}
          <Route
            index
            element={<Navigate to="/dashboard/teachers" replace />}
          />
          <Route path="teachers" element={<TeacherPage />} />
          <Route path="courses" element={<CoursePage />} />
          <Route path="students" element={<StudentPage />} />

          <Route path="trainer/assignments" element={<AssignmentsList />} />
          <Route path="admin" element={<Adminpage />} />

          <Route path="user" element={<User />} />
          <Route path="user/resources" element={<ClassResourcesPage />} />
          <Route path="user/userAssignment" element={<ClassAssignment />} />

          <Route path="trainer" element={<Trainer />} />
          <Route path="trainer/classes" element={<Classes />} />
          <Route path="trainer/students" element={<Students />} />
            
          <Route path="request" element={<CourseRequests />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    // </AuthContextProvider>
  );
}

export default App;
