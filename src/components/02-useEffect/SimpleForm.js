import React, { useEffect, useState } from 'react';

import { Message } from './Message';


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;


  useEffect(() => {
    console.log("HEY!!");
  }, []);

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1 className="mt-5">useEffect</h1>
      <hr />

      <div className="form-group mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Ingresa tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Ingresa tu correo"
          autoComplete="off"
          value={email}
          onChange={handleChange}
        />
      </div>

      {name === 'developer' && <Message />}
    </>
  );
};
