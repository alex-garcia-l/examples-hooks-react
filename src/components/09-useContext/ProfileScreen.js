import React, { useContext } from 'react';
import Swal from 'sweetalert2';

import { UserContext } from './UserContext';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

export const ProfileScreen = () => {

  const { user, setUser } = useContext(UserContext);

  const handleClick = (evt) => {
    evt.preventDefault();

    setUser({});

    Toast.fire({
      icon: 'success',
      title: 'Logout success!'
    });
  }

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h2 className="display-5 fw-bold text-center">ProfileScreen</h2>
        <hr />
        <div className="text-center">
          <button
            className="btn btn-danger btn-lg"
            onClick={ handleClick }
          >
            Logout
          </button>
        </div>
        <pre className="col-md-8 fs-4">{JSON.stringify(user, null, 3)}</pre>
      </div>
    </div>
  );
};
