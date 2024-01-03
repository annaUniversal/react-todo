import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm.js";

//custom hook
const useSemiPersistentState = (initialState, key) => {
  // Default state to read "savedTodoList" from localStorage
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(key)) || initialState
  );

  React.useEffect(() => {
    // Save todoList to localStorage with the key "savedTodoList"
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState([], "savedTodoList");

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    // Use filter to create a new array excluding the item with the given id
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <>
      <h1>ToDo List</h1>
      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;
