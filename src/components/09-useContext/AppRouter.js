import React from 'react';
import {
  Link,
  useLocation,
  Outlet
} from "react-router-dom";

export const AppRouter = () => {

  let { pathname } = useLocation();

  console.log(pathname);

  return (
    <div>
      <Outlet />
    </div>
  );
};
