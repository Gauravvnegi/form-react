import React, { useState } from 'react';
import './App.css';
import DisplayData from './DisplayData'; // Importing the DisplayData component

const App = () => {
  const [name, setName] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
  });
  
  const [submitDataValue, setSubmitDataValue] = useState(null);
  const [markFlag, setMarkFlag] = useState(false); // Updated to use meaningful variable name

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setName((preValue) => ({ ...preValue, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitDataValue(name);
    setMarkFlag(true);
  };

  return (
    <>
      <h1>Hi {name.fName} {name.lName}</h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Enter First Name'
          name='fName'
          onChange={inputEvent}
          value={name.fName}
        />
        <input
          type='text'
          placeholder='Enter Last Name'
          name='lName'
          onChange={inputEvent}
          value={name.lName}
        />
        <input
          type='email' // Changed to 'email' type for validation
          placeholder='Enter Email'
          name='email'
          onChange={inputEvent}
          value={name.email}
        />
        <input
          type='tel' // Changed to 'tel' type for phone number
          placeholder='Enter Phone Number'
          name='phone'
          onChange={inputEvent}
          value={name.phone}
        />
        <button type='submit'>Click</button>
      </form>

      {/* Conditionally rendering DisplayData component */}
      {submitDataValue && <DisplayData data={submitDataValue} />}
      
      {/* Pass first and last name correctly as an object */}
      {markFlag && (
        <DisplayData 
          data={{ 
            fName: submitDataValue.fName, 
            lName: submitDataValue.lName 
          }} 
        />
      )}
    </>
  );
};

export default App;
