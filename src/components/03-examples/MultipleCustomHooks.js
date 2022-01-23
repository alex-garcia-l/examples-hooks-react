import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1 className="mt-5">Breaking Bad</h1>

      {
        loading
          ?
          (
            <div className="alert alert-info text-center" role="alert">
              Cargando...
            </div>
          )
          :
          (
            <>
              <blockquote className="blockquote p-5 mb-4 bg-light rounded-3 text-end">
                <h2 className="mb-5">{quote}</h2>
                <footer className="blockquote-footer">{author}</footer>
              </blockquote>
              <button
                onClick={() => increment(1)}
                className="btn btn-primary float-end"
              >Siguiente quote</button>
            </>
          )
      }
    </>
  );
};
