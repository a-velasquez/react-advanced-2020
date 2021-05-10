import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.type)
  }

  return (
    <>
      <form className='form'>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input
            type='text'
            id='email'
            name='email'
          />
        </div>
        <button type='submit' onClick={handleSubmit}>add person</button>
      </form>
    </>
  )
};

export default ControlledInputs;
