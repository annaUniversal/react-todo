import React from "react";

const TodoListItem = (todoListItem) => {
  return (
    <li>
      {todoListItem.todo.id} {todoListItem.todo.title}
    </li>
  );
};

export default TodoListItem;
