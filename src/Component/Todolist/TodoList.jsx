import remove_icon from "../../assests/delete.jpg";

// Data Sourc

const TodoList = (props) => {
  const formatDate = (date) => {
    return date.toLocaleDateString();
  };
  const addTask = props.tasks.map((task, index) => {
    return (
      <div key={task.id} className="task">
        <div className="check-box">
          <button
            className={task.isToggled ? "toggle" : "untoggled"}
            onClick={() => props.onToggleClick(task.id)}></button>
          <span className="taskName">{task.name}</span>
          <p className="date">{formatDate(new Date())}</p>
        </div>

        <div className="btn-task">
          {/* <button className="edit-btn">edit</button> */}
          <button
            className="del-btn"
            onClick={() => props.onDeleteClick(task.id)}>
            <img src={remove_icon} alt="" className="del" />
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="todo-task">
      <h3>
        <i>Todo-item</i>
      </h3>
      {addTask}
    </div>
  );
};

export default TodoList;
