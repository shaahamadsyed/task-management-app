// import api from "./api";

// export const getTasks = () => api.get("/tasks");
// export const createTask = (data) => api.post("/tasks", data);
// export const updateTask = async (id, task) => {
//     return API.put(`/tasks/${id}`, task);
// };

// export const deleteTask = async (id) => {
//     return API.delete(`/tasks/${id}`);
// };

// import api from "./api";

// export const getTasks = () => api.get("/tasks");

// export const createTask = (data) => {

//     return api.post("/tasks", { ...data, status: data.status.toLowerCase() });
// };

// export const updateTask = (id, task) => {
//   return api.put(`/tasks/${id}`, { ...task, status: task.status.toLowerCase() });
// };

// export const deleteTask = (id) => api.delete(`/tasks/${id}`);


import api from "./api";

export const getTasks = () => api.get("/tasks");

export const createTask = (data) =>
  api.post("/tasks", {
    title: data.title,
    description: data.description || "",
    status: data.status.toLowerCase(),
    dueDate: data.dueDate || null,
  });

export const updateTask = (id, data) =>
  api.put(`/tasks/${id}`, {
    title: data.title,
    description: data.description || "",
    status: data.status.toLowerCase(),
    dueDate: data.dueDate || null,
  });

export const deleteTask = (id) => api.delete(`/tasks/${id}`);
