import React from 'react';
import {ToDoList} from './components/TodoList'

function App() {
  const todoList = [{id: 1, description: 'eat'},{id: 2, description: 'sleep'},{id: 3 , description: 'play'}]
  return (
    <div className="App">     
      <ToDoList items = {todoList} /> 
    </div>
  );
}

export default App;
