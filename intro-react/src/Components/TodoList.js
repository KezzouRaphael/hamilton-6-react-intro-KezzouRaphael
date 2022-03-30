import React from 'react';
import Todo from './Todo';
const TodoList = ({todos,setTodos})=>{
  return(
    <div className = 'todo-container'>
      <ul className = 'todo-list'>
        <li>
          <div className="todo-item-container">
            <p>Done?</p>
            <p> Task </p> 
          </div>
        </li>
        <hr/>
        {todos.map(todo => (
          <li key = {todo.id}>
            <Todo text = {todo.text} completed = {todo.completed}/> 
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;