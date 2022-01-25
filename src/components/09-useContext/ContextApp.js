import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { UserContext } from './UserContext';
import { Nav } from './Nav';

export const ContextApp = () => {

  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1>Context App</h1>
      <hr />
      <Nav />

      <Outlet />
    </UserContext.Provider>
  );
};
