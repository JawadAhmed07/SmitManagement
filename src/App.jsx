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
import Assignmnets from "./pagess/Assignmnets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select" element={<RoleCards />} />

        {/* Dashboard Routes */}
        <Route path="/admin" element={<DashboardLayout />}>
          {/* Admin Sub-Routes */}
          <Route index element={<Navigate to="/admin/teachers" replace />} />
          <Route path="teachers" element={<TeacherPage />} />
          <Route path="courses" element={<CoursePage />} />
          <Route path="students" element={<TrainerPage />} />
          <Route path="assignments" element={<Assignmnets />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
