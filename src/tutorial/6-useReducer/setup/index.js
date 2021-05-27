import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from '../final/reducer';
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {
  const [name, setName] = useState('')
  const[state, dispatch] = useReducer(reducer, defaultState)
  return (
    <>
      <form className='form'>
        <div>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <button type='submit'>add</button>
      </form>
    </>
  )
};

export default Index;
