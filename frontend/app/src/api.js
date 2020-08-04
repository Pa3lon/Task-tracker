import wretch from "wretch";

// let api = wretch().url("http://www.plo005.no").headers({
//   "Content-Type": "application/json",
// });

 let api = wretch().url("http://localhost:3001").headers({
   "Content-Type": "application/json",
 });

// Tasks
export const getNonCompleteTasks = () => {
  return api.url(`/tasks/?completed=${false}`).get().json();
};

export const addTask = (title, date, description) => {
  return api.url("/tasks").json({title: title, dateTime: date, description: description}).post().json();
};

export const deleteTask = (taskId) => {
  return api.url("/tasks").json({id: taskId}).delete().json();
}
