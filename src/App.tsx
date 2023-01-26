import React, {useState} from 'react';
import {ToDoList} from './components/TodoList'
import { NewToDo} from './components/NewToDo'
import { Todo} from './model/todo.module'

function App() {

  const [toDos, setTodos] = useState< Todo []>([])
 
  const onAddToDo = ( text: string) => {
    setTodos(prev => ([{ id: prev.length + 1, description: text},...prev]))
  }

  return (
    <div className="App">     
      <ToDoList items = {toDos} /> 
      <NewToDo onAdd = {onAddToDo}/>
    </div>
  );
}

export default App;
