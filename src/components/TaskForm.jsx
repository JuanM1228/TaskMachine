import React, {useState} from "react";
import '../StyleSheets/taskForm.css'
import {v4 as uuidv4} from 'uuid'

function Form(props){

  const [input, setInput] = useState('');


  const changeTask = event => {
    setInput(event.target.value)
  };

  const sendTask = event =>{
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false
    }
    props.onSubmit(newTask)
  };

  return(
    <form 
      className="task-form"
      onSubmit={sendTask}>
      <input 
      className='task-input'
      type= 'text'
      placeholder='Write a task'
      name= 'text'
      onChange={changeTask}
      />
      <button 
      className="task-button">
      New task</button>
    </form>
  )
}

export default Form;
