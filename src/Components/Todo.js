import React,{useState,useEffect} from 'react';

const Todo = ({todo,setTodos,todos})=>{
  const [checked,setChecked] = useState(todo.completed);
  const todoClickHandler = (e)=>{
    console.log(checked);
    setChecked(!checked);
    let match = todos.find(todoP => todoP.id === todo.id);
    match.completed = !checked;
    setTodos(todos);
  };
  useEffect(()=>{
    saveLocalTodos();
  },[todos,checked])
  const saveLocalTodos =()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  return(
    <div className={`todo-item-container ${todo.completed ? "completed" : ""} `}>
      <input type = "checkbox" checked = {todo.completed} onChange = {todoClickHandler}/>
      <p> {todo.text} </p> 
    </div>
  );
};
export default Todo;