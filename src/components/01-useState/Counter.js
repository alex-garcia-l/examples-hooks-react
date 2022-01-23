import React, { useState } from 'react';

export const Counter = () => {

  const [counters, setCounters] = useState({
    count1: 10,
    count2: 20,
  });

  const { count1, count2 } = counters;

  const handleAdd = (evt) => {
    evt.preventDefault();
    setCounters({
      ...counters,
      count1: count1 + 1
    });
  }

  return (
    <>
      <h1>Counter 1: {count1}</h1>
      <h1>Counter 2: {count2}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={handleAdd}
      >+</button>
    </>
  )
};
