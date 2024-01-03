import React from "react";

const TodoListItem = ({todoListItem, onRemoveTodo}) => {
  const handleOnRemove = () => {
    onRemoveTodo(todo.id);
  };

  return (
    <li>
      {todoListItem.todo.id} {todoListItem.todo.title}
      <button type="button" onClick={handleOnRemove}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
