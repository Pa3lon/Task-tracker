import wretch from "wretch";

let api = wretch().url("http://localhost:3000").headers({
  "Content-Type": "application/json",
});

// Tasks
export const getTasks = () => {
  return api.url("/tasks").get().json();
};

export const addTask = () => {
  return api.url("/tasks").post().json();
};
