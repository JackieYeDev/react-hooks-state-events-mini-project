import React, { useState } from "react";

function CategoryFilter({categories, onHandleFilter}) {
  const [categorySelected, setCategorySelected] = useState("All")
  
  function handleClick(event) {
    setCategorySelected(event.target.value)
    onHandleFilter(event);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(
        (category, index) => 
          <button key={index} 
                  onClick={handleClick} 
                  value={category} 
                  className={categorySelected === "All" || categorySelected === category? "selected":null}>{category}</button>
      )}
    </div>
  );
}

export default CategoryFilter;
