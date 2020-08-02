import React from "react";
import { Head } from "./components/Head";
import { TaskTable } from "./components/TaskTable";

export const Main = () => {
  return (
    <>
      <Head />
      <TaskTable />
    </>
  );
};
