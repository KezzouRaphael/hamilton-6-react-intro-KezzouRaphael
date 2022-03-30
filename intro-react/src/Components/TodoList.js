import React from 'react';
import Todo from './Todo';
const TodoList = ({todos})=>{
  return(
    <div className = 'todo-container'>
      <ul className = 'todo-list'>
        {todos.map(todo => (
          <li className = 'todo-item' key = {todo.id}>
            <Todo text = {todo.text} completed = {todo.completed}/> 
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;