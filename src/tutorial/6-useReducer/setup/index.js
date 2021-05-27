import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  return (
    <>
      <form className='form'>
        <div>
          <input type='text' value='' ></input>
        </div>
        <button type='submit'>add</button>
      </form>
    </>
  )
};

export default Index;
