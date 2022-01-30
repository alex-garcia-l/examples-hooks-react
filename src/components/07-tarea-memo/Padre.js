import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const memoIncrementar = useCallback((num) => {
    setValor((v) => v + num);
  }, [setValor]);  

  return (
    <div>
      <h1>Counter Pro</h1>
      <hr />
      <h2 className="mb-5">Total: <span className="badge bg-secondary">{valor}</span></h2>

      {
        numeros.map(n => (
          <Hijo
            key={n}
            numero={n}
            incrementar={memoIncrementar}
          />
        ))
      }
    </div>
  )
}
