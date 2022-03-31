import React from 'react';
import Todo from './Todo';
const TodoList = ({todos,setTodos,filteredTodos})=>{
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
              <Todo todo={todo} todos={todos} setTodos={setTodos} /> 
            </li>
          ))}
        </ul>
      </div>
      <p className="todo-counter">{filteredTodos.length} Tasks</p>
    </>
  );
};
export default TodoList;