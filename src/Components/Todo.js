import React,{useState,useEffect} from 'react';

const Todo = ({todo,setTodos,todos,status,setFilteredTodos})=>{
  const [checked,setChecked] = useState(todo.completed);
  const todoClickHandler = (e)=>{
    setChecked(!checked);
    let match = todos.find(todoP => todoP.id === todo.id);
    match.completed = !checked;
    setTodos(todos);
  };
  useEffect(()=>{
    saveLocalTodos();
    filterHandler();
  },[todos,checked])
  const saveLocalTodos =()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }
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
  return(
    <div className={`todo-item-container ${todo.completed ? "completed" : ""} `}>
      <input type = "checkbox" checked = {todo.completed} onChange = {todoClickHandler}/>
      <p> {todo.text} </p> 
    </div>
  );
};
export default Todo;