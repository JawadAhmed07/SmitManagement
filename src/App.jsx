import { BrowserRouter, Routes, Route, Navigate } from "react-router"; // Use only BrowserRouter
import "./App.css";

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
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select" element={<RoleCards />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/admin/teachers" replace />} />
          <Route path="teachers" element={<TeacherPage />} />
          <Route path="courses" element={<CoursePage />} />
          <Route path="students" element={<TrainerPage />} />
          <Route path="asignments" element={<Assignmnets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
