import { useState } from "react";

const FormSection = () => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    const taskTodo = event.target.value;
    setNewTask(taskTodo);
    console.log(taskTodo);
  };
  return (
    <div className="newtask">
      <input
        type="text"
        placeholder="Add a task"
        value={newTask}
        onChange={handleChange}
      />
      <button className="add">+</button>
    </div>
  );
};

export default FormSection;
