import React from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

  const [formState, handleChange] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formState;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="mt-5">Form With Custom Hook</h1>
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

      <div className="form-group mb-3">
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

      <div className="form-group mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*********"
          value={password}
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Enviar
      </button>
    </form>
  );
};
