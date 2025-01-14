// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from './components/ui/toaster';
import AuthContextProvider from './context/Auth.context';


createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
  <App />
  <Toaster/>
 </AuthContextProvider>
);