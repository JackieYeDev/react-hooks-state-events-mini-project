import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("")

  function handleSubmit(event){
    event.preventDefault();
    const newText = text;
    const newCategory = category;

    onTaskFormSubmit({text, category});
  }

  function handleTextChange(event){
    setText(event.target.value);
  }

  function handleCategoryChange(event){
    setCategory(event.target.value);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {categories.map(
            (c, index) =>
            <option key={index} value={c}>{c}</option>
            )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
