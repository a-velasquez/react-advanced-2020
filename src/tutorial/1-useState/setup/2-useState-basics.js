// hooks start start with use and Must start with UpperCase letter
// useState is a React function that takes a value (string, number, boolean, array)
// invoking useState returns an array with 2 values, the value and the function that controls that value
// useState can be imported along with React 
import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(['hello world'));

  // hooks must be placed in the function or component body
  // destructured way of using useState hook
  //    value, function
  const [text, setText] = useState("random title");

  // setText calls useState and passes argument to change title
  const handleClick = () => {
    if (text === 'random title') {
      setText("hello world");
    } else {
      setText('random title') 
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
