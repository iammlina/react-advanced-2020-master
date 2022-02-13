import React, { useState } from 'react';
// useState - function
// use component name must be uppercase
// must be in funct/component body
// cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState('hello'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState('random title')
  
  const handleClick = () => {
    if(text === 'random title'){
      setText('hello lina');
    } else {
      setText('random title');
    }
    
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        chang title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
