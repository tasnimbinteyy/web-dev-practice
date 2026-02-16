import React from 'react'
import { useState } from 'react'
function State() {
   const [value,setvalue] = useState("Hablu programar");

    const add = () => {
        setvalue("Everyone")
    }
  return (
    <div>
        <p>Hello {value} </p>
      <button onClick = {add} >Change name </button>
    </div>
  )
}

export default State
