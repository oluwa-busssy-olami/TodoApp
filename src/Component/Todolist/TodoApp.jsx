import React, { useState } from "react";
import "./Todolist.css";
import FormSection from "./FormSection";
import TodoList from "./TodoList";
import { nanoid } from "nanoid";

const TodoApp = () => {
  const initialTasks = [];

  const [tasks, setTasks] = useState(initialTasks);

  const addNewTask = (task) => {
    const taskObject = {
      id: nanoid(),
      name: task,
      isToggled: false, // Add isToggled property
    };
    const updatedTasks = [taskObject, ...tasks];
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    console.log(`${taskId} item deleted`);
    const updatedTasks = tasks.filter((item) => item.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTask = (toggleId) => {
    console.log(`${toggleId} item toggled`);
    const updatedTasks = tasks.map((item) =>
      item.id === toggleId ? { ...item, isToggled: !item.isToggled } : item
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <FormSection handleClick={addNewTask} />
      <TodoList
        tasks={tasks}
        onDeleteClick={deleteTask}
        onToggleClick={toggleTask}
      />
    </div>
  );
};

export default TodoApp;
