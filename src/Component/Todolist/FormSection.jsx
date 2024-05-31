import { useState } from "react";

const FormSection = (props) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    const taskTodo = event.target.value;
    setNewTask(taskTodo);
    // console.log(taskTodo);
  };
  const handleClick = (event) => {
    if (newTask.trim() === "") {
      console.log("enter a valid todo-task");
      console.log(event);
    } else {
      props.handleClick(newTask);
      console.log(`The new task is ${newTask}`);
    }
    setNewTask("");
  };
  return (
    <div className="newtask">
      <h1>
        <i>Todolist</i>
      </h1>
      <input
        type="text"
        placeholder="Add a task"
        value={newTask}
        onChange={handleChange}
      />
      <button className="add" onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default FormSection;
