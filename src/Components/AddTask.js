import React, { useState } from "react";

const AddTask = ({ addNew, list}) => {
  const [text, setText] = useState("");
  const [Day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !Day) {
      alert("Please Add Text & Date");
      return;
    }
    addNew({ text, Day });
    setText("");
    setDay("");
  };

  return (
    <div>
      <form id="newTask" className=" mb-3" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="w-100 mb-1"
              placeholder="Add Task Name"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type="text"
              className="w-100"
              placeholder="Add Date & Time"
              value={Day}
              onChange={(e) => setDay(e.target.value)}
            />
          </div>
          <div className="col-3">
            <button type="submit" className="ms-1 mt-2 btn btn-outline-warning">
              Add#{list.length+1}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
