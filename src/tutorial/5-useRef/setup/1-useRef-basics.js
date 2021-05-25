import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text'/>
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
