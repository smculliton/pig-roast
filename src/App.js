import React, { useState } from 'react'
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('')
  
  const handleChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleClick = (e) => {
    
  }

  return (
    <>
      <input  
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleChange}
        // onKeyDown={event => handleKeyDown(event)}
      />
      <button
        onClick={handleClick}
      >
        Enter
      </button>
    </>
  );
}

export default App;
