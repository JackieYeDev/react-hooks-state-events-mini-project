import React, { useState } from "react";

function Task({text, category, handleDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete} value={text}>X</button>
    </div>
  );
}

export default Task;
