

const Task = ({ task, deleteTask,doneTask }) => {
  return (
    <div className="taskContainer">
      <p
        className={`m-1 p-1 ${task.taskStatus? "taskStatus":""}`}
		onDoubleClick={()=>doneTask(task.id)}
      >
        <input type="text" value={task.text} className="task text-light" />
        {task.Day}
        <span className="float-end" onClick={() => deleteTask(task.id)}>
          <i className="bi bi-trash"></i>
        </span>
      </p>
    </div>
  );
};
export default Task;
