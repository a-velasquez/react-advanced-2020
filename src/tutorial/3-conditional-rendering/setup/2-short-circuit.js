import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('Peter');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      <h1>{text || 'john doe'}</h1>
      {/* if text is truthy render 'hello world' */}
      { text && <h1>hello world</h1>}
      {/* if text falsey render 'name is missing' */}
      { !text && <h1>name is missing</h1>}
    </>
  )
};

export default ShortCircuit;
 