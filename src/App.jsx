import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./App.css";
import axios from "axios";

// Configure Axios defaults
axios.defaults.baseURL = "http://localhost:4000/api/v1/"; // Replace with your backend URL
axios.defaults.withCredentials = true; // Enable cookies for cross-origin requests

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/login_signup/login";
import RoleCards from "./pages/select/select";
import TeacherPage from "./pagess/teacherpage";
import CoursePage from "./pagess/course";
import TrainerPage from "./pagess/Studentspage";
import DashboardLayout from "./layouts/dashboardlayout";
import {
  ProtectedRoute,
  RoleBasedRoute,
} from "./components/RouterAuthentication/ProtectedRoutes";
import Assignmnets from "./pagess/Assignmnets";
import Adminpage from "./pagess/Adminpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select" element={<RoleCards />} />

        {/* Protected Routes for Admin/Trainer */}
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
              <DashboardLayout />
            // </ProtectedRoute>
          }
        >
          {/* Admin Sub-Routes */}
          <Route index element={<Navigate to="/dashboard/teachers" replace />} />
          <Route
            path="teachers"
            element={
              // <RoleBasedRoute>
                <TeacherPage />
              // </RoleBasedRoute>
            }
          />
          <Route
            path="courses"
            element={
              // <RoleBasedRoute>
                <CoursePage />
              // </RoleBasedRoute>
            }
          />
          <Route
            path="students"
            element={
              // <RoleBasedRoute>
                <TrainerPage />
              // </RoleBasedRoute>
            }
          />
          <Route
            path="assignments"
            element={
              // <RoleBasedRoute>
                <Assignmnets />
              // </RoleBasedRoute>
            }
          />
          <Route
            path="admin"
            element={
              // <RoleBasedRoute>
                <Adminpage />
              // </RoleBasedRoute>
            }
          />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
