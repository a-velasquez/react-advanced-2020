import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'peter', age: 24, message: 'random message' })


  /* using destructured handlers to setState
  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message') */

  const changeMessage = () => {
    // setMessage('hello world')
    if (person.message === 'random message') {
      setPerson({ ...person, message: 'hello world' });
    } else {
      setPerson({ ...person, message: 'random message'})
    }
  }
  
  return (
    <>
      {/* if using destructured, you would just call name, age and message without person*/}
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  )
};

export default UseStateObject;
