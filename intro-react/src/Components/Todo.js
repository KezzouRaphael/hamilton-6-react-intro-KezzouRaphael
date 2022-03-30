import React,{useState} from 'react';

const Todo = ({text,completed})=>{
  const [checked,setChecked] = useState(completed);
  const todoClickHandler = (e)=>{
    setChecked(!checked);
    completed = checked;
    console.log(completed);
  };
  return(
    <div className="todo-item-container">
      <input type = "checkbox" checked = {checked} onChange = {todoClickHandler}/>
      <p> {text} </p> 
    </div>
  );
};
export default Todo;