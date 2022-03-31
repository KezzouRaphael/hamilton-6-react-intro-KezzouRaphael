import React,{useState,useEffect} from 'react';
import './App.scss';
//IMPORT COMPONENTS
import Form from './Components/Form'
import TodoList from './Components/TodoList'
function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);

  useEffect(()=>{
    const storedTodos =JSON.parse(localStorage.getItem("todos"));
    //console.log(storedTodos);
    if(storedTodos)
      setTodos(storedTodos);
  },[]);

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos,status])

  const filterHandler = () => {
    switch(status){
      case "completed" :
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted" :
        setFilteredTodos(todos.filter(todo =>todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  const saveLocalTodos =()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  return (
    <div className="App">
      <header>
        <h1>To Do list</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText = {setInputText} setStatus={setStatus}/>
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
