// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/login_signup/login";
import RoleCards from "./pages/select/select";
import Admindashboard from "./pages/admindashboard/admin";

function App() {
  return (
    <>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/select" element={<RoleCards />} />
            <Route path="/Admindashboard" element={<Admindashboard />} />
          </Routes>
    </>
  );
}

export default App;
