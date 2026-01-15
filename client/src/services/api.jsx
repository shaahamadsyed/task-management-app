import axios from "axios";


const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8000"                  // Dev backend
    : "https://task-management-api-31wz.onrender.com";    //

const api = axios.create({
  baseURL: `${BASE_URL}/api`, // include /api
});

// Attach JWT token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 Unauthorized
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
