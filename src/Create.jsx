import React, { useState } from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState()
  const handleAdd = () => {
    axios
      .post('http://localhost:3001/add', {
        task: task
      }).then((response) => {
        location.reload()
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <div class="create_form">
      <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create