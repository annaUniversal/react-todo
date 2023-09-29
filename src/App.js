import React from 'react';

var todoList = [
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
  <ul>
    {todoList.map( (item) =>
       <li key={item.id}>{item.title}</li>
    )}
  </ul>
  )
};

export default App;
