import React from 'react';
import Todo from './Todo';
const TodoList = ({todos,setTodos,filteredTodos,status,setStatus})=>{
  const statusHandler = (e) =>{
    setStatus(e.target.value);
  };
  return(
    <>
      <div className = 'todo-container'>
        <ul className = 'todo-list'>
          <li>
            <div className="todo-item-container">
              <p>Done?</p>
              <p> Task </p> 
            </div>
          </li>
          <hr/>
          {filteredTodos.map(todo => (
            <li key = {todo.id} >
              <Todo todo={todo} todos={todos} setTodos={setTodos}/> 
              <hr/>
            </li>
          ))}
        </ul>
      </div>      
      <div className="todo-selector">
        <p className="todo-counter">{filteredTodos.length} items</p>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Active</option>
          </select>
        </div>
      </div>
      <hr/>
    </>
  );
};
export default TodoList;