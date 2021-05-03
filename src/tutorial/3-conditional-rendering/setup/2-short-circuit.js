import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('Peter');
  const [isError, setIsError] = useState(false)
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>

      {/* if text is truthy render 'hello world' */}
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there was an error.</p>
      ) : (
        <div>
          <h2>There is no error.</h2>
        </div>
      )}

      {/* if text falsey render 'name is missing' */}
      {/* { !text && <h1>name is missing</h1>} */}
    </>
  );
};

export default ShortCircuit;
 