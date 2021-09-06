import React from 'react';
import Task from "./Task";
import AddTask from "./AddTask"

const Tasks = ({ tasks, deleteTask, doneTask, addNew }) => {
  const list = tasks;

  const task = list.map((task, index) => {
    return (
      <Task
        key={index}
        task={task}
        deleteTask={deleteTask}
        doneTask={doneTask}
      />
    );
  });

  return (
    <div className="bg-dark p-3 todoContainer">
      <AddTask addNew={addNew} list={list} />
      <p>
        Tasks Left: {list.length}{" "}
        <small className="float-end text-warning">
          Double Click To Mark As Done
        </small>
      </p>
      {list.length > 0 ? (
        task
      ) : (
        <p className="center">You Have No Task To Display ✅</p>
      )}
    </div>
  );
};

export default Tasks;
