import React from 'react'
import { connect } from 'react-redux'
import { addTodo,deleteTodo } from '../store/actions'
function Todolist(props) {
    const [newtask, setNewtask] = React.useState('')
    function addTask(){
        props.dispatch(addTodo(newtask))
    }
    function deleteTask(i){
        props.dispatch(deleteTodo(i))
    }
  return (
    <div className='betterview'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNewtask(e.target.value)}}/>
        <button onClick={addTask}>Add Task</button>
        {
            props.todos.todos.map((t,i)=>{
                return(<li key={i}>
                    {t}
                    <button onClick={()=>{deleteTask(i)}}>Delete</button>
                </li>)
            })
        }
    </div>
  )
}

export default connect(function(store){return store})(Todolist)