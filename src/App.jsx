import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./App.css";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/login_signup/login";
import RoleCards from "./pages/select/select";
import TeacherPage from "./sidebarPages/teacherpage";
import CoursePage from "./sidebarPages/course";
import TrainerPage from "./sidebarPages/Studentspage";
import DashboardLayout from "./layouts/dashboardlayout";
import Adminpage from "./sidebarPages/Adminpage";
import { AuthContextProvider } from "./context/Auth.context";
import Assignments from "./sidebarPages/Assignmnets";
import CourseRequests from "./sidebarPages/Requests";

function App() {
  return (
    <AuthContextProvider>
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
            <Route path="students" element={<TrainerPage />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="admin" element={<Adminpage />} />
            <Route path="request" element={<CourseRequests />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
