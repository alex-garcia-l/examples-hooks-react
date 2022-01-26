import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  increment: PropTypes.func.isRequired
}
