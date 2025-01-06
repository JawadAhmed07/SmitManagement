const devUrl = "http://localhost:4000/";
const prodUrl = "https://smitproject.onrender.com/";

export const BASE_URL = devUrl;

export const AppRoutes = {
  login: BASE_URL + "api/v1/user/login",
  register: BASE_URL + "api/v1/user/register",
  getMyInfo: BASE_URL + "api/v1/user/",
  //   getCourses: BASE_URL + "course",
  //   getStudents: BASE_URL + "students",
  //   addCourse: BASE_URL + "course",
};
