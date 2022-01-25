import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterWhitCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />
      <button
        className="btn btn-danger"
        onClick={() => decrement(2)}
      >-1</button>
      <button
        className="btn btn-warning mx-2"
        onClick={reset}
      >reset</button>
      <button
        className="btn btn-primary"
        onClick={() => increment(2)}
      >+1</button>
    </>
  );
};
