import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Head } from "./components/Head";
import { TaskTable } from "./components/TaskTable";

ReactDOM.render(
  <div>
    <Head />
    <div className="table-container">
      <TaskTable />
    </div>
  </div>,
  document.getElementById("root")
);
