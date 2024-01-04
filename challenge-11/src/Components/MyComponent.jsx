import React, { useCallback, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Function to increment count
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  // Function to decrement count
  const decrementCount = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  // Function to log the count
  const logCount = useCallback(() => {
    console.log(`Current count: ${count}`);
  }, [count]);

  console.log('Rendering MyComponent');

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={logCount}>Log Count</button>
    </div>
  );
};

export default MyComponent;
