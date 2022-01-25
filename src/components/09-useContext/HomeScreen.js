import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

  const { user } = useContext(UserContext);

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h2 className="display-5 fw-bold text-center">HomeScreen</h2>
        <hr />
        <pre className="col-md-8 fs-4">{JSON.stringify(user, null, 3)}</pre>
      </div>
    </div>
  );
};