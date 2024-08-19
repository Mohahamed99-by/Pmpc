import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const memoizedHandleChange = useCallback((event) => {
    setText(event.target.value);
  }, []);

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count}</p>
      <ChildComponent handleChange={memoizedHandleChange} text={text} />
    </div>
  );
};

export default ParentComponent;
