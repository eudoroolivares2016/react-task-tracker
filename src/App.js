import Header from "./Components/Header";
import Tasks from "./Components/Tasks"
import AddTask from "./Components/AddTask";

import { useState } from "react"

// import React from "react";
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
    id:1,
    text: "something I need to do",
    day: "January 5th 2022",
    reminder: false
    }, 
    {
        id:2,
        text: "something else I need to do",
        day: "January 6th 2022",
        reminder: true
    }])

    const addTask = (task) => {
       const id = Math.floor(Math.random() * 1000 + 1)
       // Add the id field to the task object
       const newTask = {id, ...task }
       setTasks([...tasks, newTask])
       console.log(newTask);
    }

    // Delete task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle reminder
    const toggleReminder = (id) =>
    {
      // Find specific task and then change the reminder field
      // For all of the fields in the task toggle the boolean value
      // If it's been clicked and it's not the task.id then just put the task in
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }
    // && is shorthand for a ternary operation without and else condition
  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask) } showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} toggleReminder = { toggleReminder }/>: 'No tasks in the queue'}
    </div>
  );
}

export default App;
