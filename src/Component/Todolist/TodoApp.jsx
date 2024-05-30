import React, { useState } from "react";
import "./Todolist.css";
import FormSection from "./FormSection";
import TodoList from "./TodoList";
import { nanoid } from "nanoid";

const TodoApp = () => {
  const initilTasks = [];

  const [tasks, setTasks] = useState(initilTasks);
  const addNewTask = (task) => {
    // console.log(`In the TodoApp Th new task is ${task}`);
    const taskObject = {
      id: nanoid(),
      name: task,
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
