import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

import { useForm } from '../../hooks/useForm';

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-outline-danger ms-4'
  },
  buttonsStyling: false
})

export const TodoForm = ({ handleAdd }) => {

  const inputDescription = useRef();
  const [{ description }, handleInputChange, resetForm] = useForm({
    description: ''
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (description === '') {
      swalWithBootstrapButtons.fire({
        title: 'Something is wrong!',
        text: 'Add a description',
        icon: 'error',
        confirmButtonText: 'Accept',
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      inputDescription.current.focus();
      return;
    }

    handleAdd({
      id: new Date().getTime(),
      desciption: description,
      done: false
    });

    resetForm();
    inputDescription.current.focus();
  }

  return (
    <>
      <h3>Add Todo</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            autoFocus
            className="form-control"
            placeholder="Description"
            autoComplete="off"
            name="description"
            value={description}
            onChange={handleInputChange}
            ref={inputDescription}
          />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>

        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-primary d-block"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

TodoForm.propTypes = {
  handleAdd: PropTypes.func.isRequired
}
