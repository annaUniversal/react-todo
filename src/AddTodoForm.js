import React, { useState } from "react";

const AddTodoForm = (props) => {
  const [todoTitle, setTodoTitle] = useState(""); // Initialize todoTitle state with an empty string

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);

    props.onAddTodo({ title: todoTitle, id: Date.now() });

    // Reset the todoTitle state to an empty string
    setTodoTitle(""); // Reset the todoTitle state to an empty string
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title:</label>
        <br />
        <input
          type="text"
          id="todoTitle"
          name="title"
          value={todoTitle}
          onChange={handleTitleChange}
          required
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
