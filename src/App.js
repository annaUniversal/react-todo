import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm.js";

//custom hook
// const useSemiPersistentState = (initialState, key) => {
//   // Default state to read "savedTodoList" from localStorage
//   const [state, setState] = useState(
//     JSON.parse(localStorage.getItem(key)) || initialState
//   );

//   React.useEffect(() => {
//     // Save todoList to localStorage with the key "savedTodoList"
//     localStorage.setItem(key, JSON.stringify(state));
//   }, [state, key]);

//   return [state, setState];
// };

function App() {
  // Default state to read "savedTodoList" from localStorage
  const initialState = JSON.parse(localStorage.getItem("savedTodoList")) || [];
  const [todoList, setTodoList] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = new Promise((resolve, reject) => {
      // Simulate loading delay with a timeout
      setTimeout(() => {
        resolve({
          data: {
            todoList: initialState, // Set the initial/default list state
          },
        });
      }, 2000); // 2 seconds delay
    });

    fetchData.then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false); // Set isLoading to false when data is fetched
    });
  }, []); // Empty dependency list for a one-time effect

  useEffect(() => {
    if (!isLoading) {
      // Save todoList to localStorage with the key "savedTodoList"
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]); // Updated dependency list

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

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
}

export default App;
