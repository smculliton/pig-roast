import React, { useState } from 'react'
import './App.css'

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
      [name]: name === 'numberPeople' ? Number(value) : value
    }))
  }

  const handleClick = (e) => {
    console.log(formData)
    appendToSheet()
  }

  async function appendToSheet() {
    try {
      const response = await fetch('http://localhost:3002/api/v1/sheets',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <br/>
      First Name:
      <input  
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

      <br/>
      Last Name:
      <input  
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

      <br/>
      Side Dish:
      <input  
        type="text"
        name="sideDish"
        value={formData.sideDish}
        onChange={handleChange}
      />

      <br/>
      # of People:
      <select  
        name="numberPeople"
        value={formData.numberPeople}
        onChange={handleChange}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>
      <br/>

      <button
        onClick={handleClick}
      >
        Enter
      </button>
    </>
  );
}

export default App;
