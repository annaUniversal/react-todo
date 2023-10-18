import React from "react";

const AddTodoForm = (props) => {
  
  const handleAddTodo =(event) =>{
    event.preventDefault();
    const todoTitle = event.target.title.value; // Get value from input field by its id
    console.log(todoTitle);

    props.onAddTodo(todoTitle);
    event.target.reset(); // Reset the form after submission
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title:</label>
        <br />
        <input type="text" id="todoTitle" name="title" required />
        <br />
        <button type="submit"  >Add</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
