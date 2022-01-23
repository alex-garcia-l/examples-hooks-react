import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout_effect.css';

export const LayoutEffect = () => {

  const { counter, increment } = useCounter(1);

  const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !!data && data[0];
  const [ boxSize, setBoxSiza ] = useState({})

  const pTag = useRef();

  useLayoutEffect(() => {
    setBoxSiza(pTag.current.getBoundingClientRect());
  }, [quote]);
  

  return (
    <>
      <h1 className="mt-5">Layout Effect</h1>

      <blockquote className="blockquote p-5 mb-4 bg-light rounded-3 text-end">
        <h2 ref={ pTag }>{quote}</h2>
      </blockquote>

      <pre>
        { JSON.stringify(boxSize, null, 3) }
      </pre>

      <button
        onClick={() => increment(1)}
        className="btn btn-primary float-end mb-5"
      >
        Siguiente quote
      </button>
    </>
  );
};
