import React from "react";
import "./Todolist.css";
import FormSection from "./FormSection";
import TodoList from "./TodoList";
import Buttons from "./Buttons";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  return (
    <div className="container">
      <FormSection />
      <TodoList />
      {/* <TodoItem />
      <Buttons /> */}
    </div>
  );
};

export default TodoApp;
