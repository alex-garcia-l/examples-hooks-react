import React from 'react';

export const NotFount = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">404</h1>
        <p className="col-md-8 fs-4">Page Not Found.</p>
        <a href="/" className="btn btn-primary btn-lg" type="button">Go to Todo App</a>
      </div>
    </div>
  );
};
