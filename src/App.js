import React, { useState } from 'react';
import './App.css';

function App() {

  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])

  const addTask = () => {
    setToDos([...toDos, toDo])
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Have A Nice Day..! 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." value={toDo} onChange={(event) => { setToDo(event.target.value) }} />
        <i className="fas fa-plus" onClick={addTask}></i>
      </div>
      <div className="todos">
        {
          toDos.map((task) => {
            return (
              <div className="todo">
                <div className="left">
                  <input type="checkbox" name="" id="" />
                  <p>{task}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times"></i>
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