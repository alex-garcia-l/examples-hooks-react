import React, { useEffect, useState } from 'react';

export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  const mouseMove = ({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);


  return (
    <div>
      <h1>Hola Developer!!</h1>
      <h2>({x}, {y})</h2>
    </div>
  );
};
