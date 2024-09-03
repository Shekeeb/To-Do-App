import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])
  const [edit, setEdit] = useState(0)

  const addTask = () => {
    if (toDo !== "") {
      setToDos([...toDos, { list: toDo, id: Date.now(), status: false }])
      setToDo('')
    }
    if(edit){
      const editTask=toDos.find((task)=>task.id===edit)
      const updateTask = toDos.map((task) => task.id === editTask.id ? { ...task, list: toDo } : task );
      setToDos(updateTask)
      setEdit(editTask)
      setToDo('')
    }
  }

  const inputRef = useRef('null')

  useEffect(() => {
    inputRef.current.focus()
  })

  const deleteTask = (id) => {
    setToDos(toDos.filter((task) => task.id !== id))
  }

  const completeTask = (id) => {
    const complete = toDos.map((task) => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task
    })
    setToDos(complete)
  }

  const editTask = (id) => {
    const edit = toDos.find((task) => task.id === id)
    setToDo(edit.list)
    setEdit(edit.id)
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To-Do List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Have A Nice Day..! 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." ref={inputRef} value={toDo} onChange={(event) => { setToDo(event.target.value) }} />
        {edit ? <i class="fa-solid fa-file-pen" title='Edit' onClick={()=>{addTask(); setEdit(null)}}></i> : <i className="fas fa-plus" title='Add' onClick={addTask}></i>}
      </div>
      <div className="todos">
        {
          toDos.map((task) => {
            return (
              <div className="todo">
                <div className="left" id={task.status ? "left" : ""}>
                  <p>{task.list}</p>
                </div>
                <div className="right">
                  <i class="fa-solid fa-circle-check" title='Complete' onClick={() => completeTask(task.id)}></i>
                  <i class="fa-solid fa-file-pen" title='Edit' onClick={() => editTask(task.id)}></i>
                  <i class="fa-solid fa-trash" title='Delete' onClick={() => deleteTask(task.id)}></i>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;