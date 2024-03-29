import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
const Form = ({inputText,todos,setTodos,setInputText,setStatus})=>{
  const inputTextHandler = (e)=>{
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e)=>{
    e.preventDefault();
    setTodos([...todos,{text : inputText, completed : false, id:uuidv4()}]);
    setInputText("");
  };
  const deleteTodoHandler = (e) =>{
    e.preventDefault();
    let newTodos =[...todos];
    let newTodosFilter = newTodos.filter(todo => todo.completed === false);
    setTodos(newTodosFilter);
  };
  return(
    <form>
    <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" placeholder="&#8964; What needs to be done?"/>
    <button onClick={submitTodoHandler} className="todo-button" type="submit">
    <FontAwesomeIcon icon={faSquarePlus}/>
    </button>    
    <button onClick={deleteTodoHandler} className="todo-button" type="delete">Clear</button>
  </form> 
  );
};
export default Form;