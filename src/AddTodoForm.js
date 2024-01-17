import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = (addTodoForm) => {
  const [todoTitle, setTodoTitle] = useState(""); // Initialize todoTitle state with an empty string

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);

    addTodoForm.onAddTodo({ title: todoTitle, id: Date.now() });

    // Reset the todoTitle state to an empty string
    setTodoTitle(""); // Reset the todoTitle state to an empty string
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          /* label="Title"  */
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          Title
        </InputWithLabel>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
