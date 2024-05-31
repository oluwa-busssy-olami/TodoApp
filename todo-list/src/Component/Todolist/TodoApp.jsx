import React, { useState } from "react";
import "./Todolist.css";
import FormSection from "./FormSection";
import TodoList from "./TodoList";

const TodoApp = () => {
  const initilTasks = [
    {
      id: 1,
      name: "cook",
    },
    {
      id: 2,
      name: "cook",
    },
  ];

  const [tasks, setTasks] = useState(initilTasks);
  const addNewTask = (task) => {
    // console.log(`In the TodoApp The new task is ${task}`);
    const taskObject = {
      id: 3,
      name: `${task}`,
    };
    const updatedTasks = [taskObject, ...tasks];
    // console.log(...tasks);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <FormSection handleClick={addNewTask} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default TodoApp;
