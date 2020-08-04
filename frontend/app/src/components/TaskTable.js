import React, { useState, useEffect, useRef } from "react";
import { getNonCompleteTasks } from "../api";
import { deleteTask } from "../api";
import Button from "@material-ui/core/Button";
import { CompleteModal } from "./CompleteModal";

export const TaskTable = (props) => {
  const [tasks, setTasks] = useState([]);
  const [time, setTime] = useState([]);
  const modalElement = useRef();
  useEffect(() => {
    getNonCompleteTasks().then((res) => {
      setTasks(res);
      let interval = setInterval(() => {
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
    if (timeDifInMillis < 0) {
      return "0d 0h 0m 0s";
    }
    let secs = Math.floor((timeDifInMillis / 1000) % 60);
    let mins = Math.floor((timeDifInMillis / (1000 * 60)) % 60);
    let hours = Math.floor((timeDifInMillis / (1000 * 60 * 60)) % 24);
    let days = Math.floor(timeDifInMillis / (1000 * 60 * 60 * 24));
    let time = days + "d " + hours + "h " + mins + "m " + secs + "s";
    return time;
  };

  const deleteAndUpdate = (taskId, i) => {
    deleteTask(taskId).then(() => {
      window.location = "/";
    });
  };

  return (
    <>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Time left</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{time[i]}</td>
              <td>
                <Button
                  style={{ margin: "10px" }}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    console.log(modalElement);
                  }}
                >
                  Complete
                </Button>
                <Button
                  style={{ margin: "10px" }}
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteAndUpdate(task._id, i)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CompleteModal ref={modalElement} />
    </>
  );
};
