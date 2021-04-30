import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // useState can also be imported with React, { useState }
  const [people, setPeople] = React.useState(data); 
  return (
    // <></> same as React.Fragment
    <>
      {
        people.map((person) => {
          // destructured method of accessing values of person object
          const { id, name } = person;
          console.log(person)
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
            </div>
          );
        })};
    </>
  );
};

export default UseStateArray;
