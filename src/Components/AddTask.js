import React from 'react'
import  {useState} from 'react'
// Each component is going to have it's own component level of state and the default state that they will have
const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDate]  = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {

        e.preventDefault()

        if(!text){
            alert('please return text')
        }
        onAdd({text, day, reminder})
        setText('')
        setDate('')
        setReminder(false)
    }
  
    return (
    <form className= 'add-form' onSubmit={onSubmit}>
        <div className='form-control'> 
        <label> Task </label>
        <input type='text' placeholder='Add task' value={text} onChange= {(e) => setText(e.target.value)}/>
        </div>

        <div className='form-control'> 
        <label> Day and Time</label>
        <input type='text' placeholder='Add date & time' value={day} onChange= {(e) => setDate(e.target.value)}/>
        </div>
    
        <div className='form-control form-control-check'> 
        <label>Set Reminder</label>
        <input type='checkbox' placeholder='Set reminder' checked={reminder} value={reminder} onChange = {(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type= 'submit' value='Save Task'
        className='btn btn-block'/> 
    </form>
  )
}

export default AddTask