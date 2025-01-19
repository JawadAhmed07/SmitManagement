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
import User from "./sidebarPages/MainPages/User";
import Trainer from "./sidebarPages/MainPages/TrainerSubPages/Trainer";
import CourseDetail from "./sidebarPages/CourseDetailPage";
import { AssignmentsList } from "./sidebarPages/MainPages/TrainerSubPages/Assignments";
import Classes from "./sidebarPages/MainPages/TrainerSubPages/Classes";
import StudentPage from "./sidebarPages/Studentspage";

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
          <Route path="courses/:courseId" element={<CourseDetail />} /> {/* Dynamic route */}
          <Route path="students" element={<StudentPage />} />

          <Route path="trainer/assignments" element={<AssignmentsList />} />
          <Route path="admin" element={<Adminpage />} />
          <Route path="user" element={<User />} />
          <Route path="trainer" element={<Trainer />} />
          <Route path="trainer/classes" element={<Classes />} />
            
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
