import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

export const MemoHook = () => {

  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1>Memo Hook</h1>
      <h2>Counter: <small>{counter}</small></h2>
      <hr />

      <p>{memoProcesoPesado}</p>

      <button
        className="btn btn-primary"
        onClick={() => increment()}
      >
        +1
      </button>

      <button
        className="btn ms-4 btn-outline-primary"
        onClick={() => {
          setShow(!show)
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>

    </>
  );
};
