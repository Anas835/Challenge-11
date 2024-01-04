import React, { useState } from 'react';

// Custom hook for handling input logic
const useInputLogic = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return {
    value,
    onChange: handleChange,
    reset,
  };
};

// Functional component using the custom hook for input logic
const ComponentA = () => {
  const inputProps = useInputLogic('Component A');

  return (
    <div>
      <h2>Component A</h2>
      <input type="text" {...inputProps} />
      <button onClick={inputProps.reset}>Reset</button>
    </div>
  );
};

// Another functional component using the same custom hook for input logic
const ComponentB = () => {
  const inputProps = useInputLogic('Component B');

  return (
    <div>
      <h2>Component B</h2>
      <input type="text" {...inputProps} />
      <button onClick={inputProps.reset}>Reset</button>
    </div>
  );
};

export { ComponentA, ComponentB };
