import React,{useState} from 'react';
import './App.scss';
//IMPORT COMPONENTS
import Form from './Components/Form'
import TodoList from './Components/TodoList'
function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>To Do list</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText = {setInputText}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
