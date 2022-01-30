import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (

    <div className="container mb-5">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item"><NavLink className="nav-link" to="/context-app" end>Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/context-app/about">About</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/context-app/login">Login</NavLink></li>
        </ul>
      </header>
    </div>
  );
};
