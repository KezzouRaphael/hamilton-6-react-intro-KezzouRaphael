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
    <>
    <header>
        <h1>todos</h1>
    </header>
    <div className="App">
      <hr/>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText = {setInputText} setStatus={setStatus}/>
      <hr/>
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus}/> 
    </div>
    </>
  );
}

export default App;
