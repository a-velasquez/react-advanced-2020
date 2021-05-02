// useEffect Hook used to set up a side-effect (work outside of component, data fetching, event-listeners)
// by default useEffect runs after every re-render

import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  // useState preserves the value between every re-render 
  // useState triggers a re-render


  // useEffect will run after every render
  // 2nd parameter - 
  useEffect(() => {
    console.log("2. call useEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
      console.log("value updated");
    }
    // when [value] is changed useEffect will run again
    // if 2nd paramenter ([value]) is not provided useEffect will run everytime the page is rendered
  }, [value]);
  
  // dependency list not provided so won't render when first useEffect is called
  useEffect(() => {
    console.log('hello world')
  },[])

  console.log('1. render component')
  return <>
    <h1>{value}</h1>
    {/* invokes setValue everytime the button is clicked */}
    <button className='btn' onClick={() => setValue(value + 1)}>Click Me</button>
  </>;
};

export default UseEffectBasics;
