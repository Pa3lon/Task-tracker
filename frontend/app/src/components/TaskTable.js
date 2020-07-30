import React, { useState, useEffect } from "react";
import { getTasks } from "../api";

export const TaskTable = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((res) => {
      setTasks(res);
    });
  }, []);

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Time left</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task._id}>
            <td>{task.title}</td>
            <td>{task.dateTime.split("T")[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
