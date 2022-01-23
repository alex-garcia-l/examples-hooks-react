import React, { useRef } from 'react';

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = (item) => {

    if (item === 'nombre') {
      inputRef.current.select();
    } else {
      document.getElementById('apellido').select();
    }

  }

  return (
    <>
      <h1 className="mt-5">Focus Screen</h1>
      <hr />

      <input
        className="form-control"
        placeholder="Ingrese su nombre"
        ref={inputRef}
      />

      <input
        className="form-control mt-3"
        placeholder="Ingrese su apellido"
        id="apellido"
      />

      <button
        className="btn btn-outline-primary mt-3 me-3"
        onClick={() => handleClick('nombre')}
      >
        Seleccionar nombre
      </button>

      <button
        className="btn btn-outline-primary mt-3"
        onClick={() => handleClick('apellido')}
      >
        Seleccionar apellido
      </button>
    </>
  );
};
