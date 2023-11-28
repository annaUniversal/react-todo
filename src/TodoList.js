import React from "react";
import TodoListItem from "./TodoListItem";

// const todoList = [
//   {
//     id: 1,
//     title: "Wake up",
//   },
//   {
//     id: 2,
//     title: "Take a shower",
//   },
//   {
//     id: 3,
//     title: "Walk the dog",
//   },
// ];

const TodoList = ({todoList}) => {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default TodoList;
