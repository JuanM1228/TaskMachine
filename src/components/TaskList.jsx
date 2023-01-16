import React, {useState} from "react";
import Form from "./TaskForm";
import '../StyleSheets/taskList.css'
import Task from "./task";

function TaskList(){

  const [tasks, setTasks] = useState([]);

  const newTask = task => {
    if(task.text.trim()){
      task.text = task.text.trim();
      const ActualTasks = [task, ...tasks];
      setTasks(ActualTasks);
    }
  }

  const deleteTask = id => {
    const ActualTasks = tasks.filter(task => task.id !== id);
    setTasks(ActualTasks)
  }

  const completeTask = id =>{
    const ActualTasks = tasks.map(task =>{
      if(task.id === id){
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(ActualTasks);
  }

  return(
    <>
    <Form onSubmit = {newTask}/>
    <div className="task-list-container">
      {
        tasks.map((task) => 
          <Task
          key={task.id}
          id = {task.id}
          text={task.text}
          complete ={task.complete}
          completeTask = {completeTask}
          deleteTask = {deleteTask} />
        )
      }
    </div>
    </>
  )
}

export default TaskList