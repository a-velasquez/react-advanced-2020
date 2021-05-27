import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer'

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: 'hello',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
    } else {
      dispatch()
    }
  }
  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} />
      )}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <button type='submit'>add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
};

export default Index;
