// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home/Home';
import Login from './pages/login_signup/login';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
