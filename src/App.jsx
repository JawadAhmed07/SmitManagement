import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./App.css";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/login_signup/login";
import RoleCards from "./pages/select/select";
import TeacherPage from "./pagess/teacherpage";
import CoursePage from "./pagess/course";
import TrainerPage from "./pagess/Studentspage";
import DashboardLayout from "./layouts/dashboardlayout";
import Adminpage from "./pagess/Adminpage";
import { AuthContextProvider } from "./context/Auth.context";
import Assignments from "./pagess/Assignmnets";

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
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
