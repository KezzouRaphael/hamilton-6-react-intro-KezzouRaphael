import React from 'react';

const Todo = ({text,completed})=>{
  return(
    <label>
      <input type="checkbox" checkbox={completed}/>
      {text}
    </label>
  );
};
export default Todo;