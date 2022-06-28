import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES);
  const [filterCategory, setFilterCategory] = useState("All");

  function handleDelete(event) {
    const itemToDelete = event.target.value;
    setTasks(tasks.filter((task) => task.text !== itemToDelete))
  }

  function handleFilter(event) {
    setFilterCategory(event.target.value);
  }

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  const tasksToDisplay = tasks
    .filter((task) => filterCategory === "All" || task.category === filterCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onHandleFilter={handleFilter}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList handleDelete={handleDelete} tasks={tasksToDisplay}/>
    </div>
  );
}

export default App;
