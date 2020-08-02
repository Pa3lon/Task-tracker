import React, { useState, useEffect } from "react";
import { getTasks } from "../api";

export const TaskTable = (props) => {
  const [tasks, setTasks] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    getTasks().then((res) => {
      setTasks(res);
      const interval = setInterval(() => {
        const newTime = [];
        res.forEach((task) => {
          let dateDif = new Date(task.dateTime) - new Date();
          const time = getTimeString(dateDif);
          newTime.push(time);
        });
        setTime(newTime);
      }, 1000);
    });
  }, []);

  const getTimeString = (timeDifInMillis) => {
    let secs = Math.floor((timeDifInMillis / 1000) % 60);
    let mins = Math.floor((timeDifInMillis / (1000 * 60)) % 60);
    let hours = Math.floor((timeDifInMillis / (1000 * 60 * 60)) % 24);
    let days = Math.floor(timeDifInMillis / (1000 * 60 * 60 * 24));
    let time = days + "d " + hours + "h " + mins + "m " + secs + "s";
    return time;
  };

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Time left</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, i) => (
          <tr key={task._id}>
            <td>{task.title}</td>
            <td>{time[i]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
