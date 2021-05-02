import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // useState can also be imported with React, { useState }
  const [people, setPeople] = React.useState(data);
  
  const removeItem = (id) => {
    // returns new array
    let newPeople = people.filter((person) => person.id !== id)
    // passing setPeople new array
    setPeople(newPeople)
  }
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
              {/* calling arrow function so eventHandler doesn't automatically run on render of page */}
              <button onClick={() => removeItem(id)}>Remove Item</button>
            </div>
          );
        })}
      {/* calling function inline versus creating handler */}
      <button className='btn' onClick={() => setPeople([])}>Clear Items</button>
    </>
  );
};

export default UseStateArray;
 