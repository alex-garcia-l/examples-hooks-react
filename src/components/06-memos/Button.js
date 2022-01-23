import React from 'react';

export const Button = React.memo(({ increment }) => {

  console.log('Me renderizé');

  return (
    <button
      className="btn btn-success"
      onClick={increment}
    >
      +1
    </button>
  );
});
