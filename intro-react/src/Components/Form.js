import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
const Form = ({inputText,todos,setTodos,setInputText})=>{
  const inputTextHandler = (e)=>{
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e)=>{
    e.preventDefault();
    setTodos([...todos,{text : inputText, completed : false, id:uuidv4()}]);
    setInputText("");
  }
  return(
    <form>
    <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" placeholder="What to do..."/>
    <button onClick={submitTodoHandler} className="todo-button" type="submit">
    <FontAwesomeIcon icon={faSquarePlus}/>
    </button>    
    <button className="todo-button" type="submit">Clear</button>
    <div className="select">
      <select name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form> 
  );
};
export default Form;