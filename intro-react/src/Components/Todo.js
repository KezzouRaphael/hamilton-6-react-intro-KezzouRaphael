import React,{useState} from 'react';

const Todo = ({todo,setTodos,todos})=>{
  const [checked,setChecked] = useState(false);
  const todoClickHandler = (e)=>{
    setChecked(!checked);
    let match = todos.find(todoP => todoP.id === todo.id);
    match.completed = !checked;
  };
  return(
    <div className={`todo-item-container ${todo.completed ? "completed" : ""} `}>
      <input type = "checkbox" checked = {checked} onChange = {todoClickHandler}/>
      <p> {todo.text} </p> 
    </div>
  );
};
export default Todo;