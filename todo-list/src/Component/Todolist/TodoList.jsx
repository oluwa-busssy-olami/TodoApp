import React from "react";
// import green_tick from "../../assests/green-tick.jpg";
import remove_icon from "../../assests/delete.jpg";

// Data Sourc
const tasks = [
  {
    id: 1,
    name: "cook",
  },
  {
    id: 2,
    name: "cook",
  },
  {
    id: 3,
    name: "cook",
  },
  {
    id: 4,
    name: "cook",
  },
];
const TodoList = () => {
  const addTask = tasks.map((task, index) => {
    return (
      <div key={task.id} className="task">
        <div className="check-box">
          <button>
            toggle
            {/* <img src={green_tick} alt="" className="check-click" /> */}
          </button>
          <span className="taskName">{task.name}</span>
        </div>

        <div className="btn-task">
          {/* <button className="edit-btn">edit</button> */}
          <button className="del-btn">
            <img src={remove_icon} alt="" className="del" />
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="todo-task">
      <h3>TASKS</h3>
      {addTask}
    </div>
  );
};

export default TodoList;
