import { useState } from "react";
import Tasks from "./Components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 100 * Math.random(),
      text: "Learn Redux",
      Day: "28 Feb 2021",
      taskStatus: false,
    },
    {
      id: 100 * Math.random(),
      text: "Go to The Doctor",
      Day: "08 June 2021",
      taskStatus: false,
    },
    {
      id: 100 * Math.random(),
      text: "Create An Invoice",
      Day: "04 March 2021",
      taskStatus: false,
    },
    {
      id: 100 * Math.random(),
      text: "Do More",
      Day: "02 Aug 2021",
      taskStatus: false,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Mark Done
  const doneTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, taskStatus: !task.taskStatus } : task
      )
    );
  };

  //Add New Task
  const addNew = (task) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const taskStatus = false;
    const newTask = { id, taskStatus, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container bg-warning text-light p-5 vh-100">
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        doneTask={doneTask}
        addNew={addNew}
      />
    </div>
  );
};

export default App;
