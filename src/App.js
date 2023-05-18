import React, { useState } from 'react'
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    sideDish: '',
    numberPeople: 0
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleClick = (e) => {
    console.log(formData.firstName + formData.lastName)
  }

  return (
    <>
      First Name:
      <input  
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        // onKeyDown={event => handleKeyDown(event)}
      />
      Last Name:
      <input  
        type="text"
        name="lastName"
        value={formData.lastName}
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
