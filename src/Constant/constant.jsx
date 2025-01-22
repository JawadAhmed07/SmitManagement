const devUrl = "http://localhost:4000/";
const prodUrl = "https://smitproject.onrender.com/";

// Use the environment variable to set the base URL
export const BASE_URL =
  process.env.NODE_ENV === "production" ? prodUrl : devUrl;

export const AppRoutes = {
  login: BASE_URL + "api/v1/user/login",
  register: BASE_URL + "api/v1/user/register",
  logout: BASE_URL + "api/v1/user/logout",
  getMyInfo: BASE_URL + "api/v1/user/profile",
  getCourses: BASE_URL + "api/v1/course/available",
  getTrainers: BASE_URL + "api/v1/trainers",
  addCourse: BASE_URL + "api/v1/course",
};
