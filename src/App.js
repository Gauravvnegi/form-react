import React, { useState } from 'react';
import './App.css'
const App =()=>{
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState('');
  const inputEvent = (event)=>{
    setName(event.target.value);
  }
  const onSubmit = ()=>{
    // alert(`Hello ${name}`)
    setFullName(name);
    
  }
  return(
    <>
      <h1>Hi {fullName}</h1>
      <input type = 'text' 
      placeholder = 'Enter Fname' 
      onChange={inputEvent}
      value = {name}></input>
      <button onClick={onSubmit}>CLick</button>
     </>
  )
}

export default App;