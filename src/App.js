import React from 'react';

let todoList = [
  {
    id: 1,
    title: "Wake up"
  },
  {
    id: 2,
    title: "Take a shower"
  },
  {
    id: 3,
    title: "Walk the dog"
  }
];

function App() {
  return(
    <span>
      <h1>ToDo List</h1>
      <ul>
        {todoList.map( (item) =>
          <li key={item.id}>{item.title}</li>
        )}
      </ul>
    </span>
  )
};

export default App;
