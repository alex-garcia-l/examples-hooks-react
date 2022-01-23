import React, { useCallback, useState } from 'react';
import { Button } from './Button';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  const memoSetCounter = useCallback(() => {
    setCounter(c => c + 1);
  }, [setCounter]);


  return (
    <>
      <h1>Callback Hook: <small>{counter}</small></h1>
      <hr />
      <Button increment={memoSetCounter} />
    </>
  );
};
