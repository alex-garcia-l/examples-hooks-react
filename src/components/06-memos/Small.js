import React from 'react';

export const Small = React.memo(({ value }) => {

  console.log('Me redibuje otra vez');

  return (
    <>
      <small>{value}</small>
    </>
  );
});
