// This is the X icon
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, toggleReminder }) =>{

    return (
        <div className= {`task ${task.reminder ? 'reminder' : ''}`}>
            <h3 onDoubleClick={() => toggleReminder(task.id) } >{task.text} <FaTimes style={ {'color': "red", 'cursor': 'pointer'}} onClick = { () =>  onDelete(task.id) }/>  </h3>
            <p>{task.day}</p>
        </div>
    )


}

export default Task