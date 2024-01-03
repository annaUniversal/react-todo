import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  console.log(onRemoveTodo);
  const handleOnRemove = () => {
    onRemoveTodo(todo.id);
  };

  return (
    <li>
      {todo.id}
      {todo.title}
      <button type="button" onClick={handleOnRemove}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
