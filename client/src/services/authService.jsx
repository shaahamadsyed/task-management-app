import api from "./api";

/* ================= REGISTER ================= */
export const registerUser = async (userData) => {
  const res = await api.post("/users/register", userData);
  return res.data;
};

/* ================= LOGIN ================= */
export const loginUser = async (credentials) => {
  const res = await api.post("/users/login", credentials);

 
  localStorage.setItem("token", res.data.token);

  return res.data;
};

/* ================= LOGOUT ================= */
export const logoutUser = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
