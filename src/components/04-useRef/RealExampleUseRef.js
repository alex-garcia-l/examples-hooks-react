import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleUseRef = () => {

  const [visibility, setVisibility] = useState(true);

  return (
    <>
      <div className="clearfix">
        <h1 className="float-start">RealExampleUseRef</h1>
        <button
          className="btn btn-outline-primary mt-3 float-end"
          onClick={() => {
            setVisibility(!visibility);
          }}
        >Visualizar/Ocultar</button>
      </div>
      <hr />

      {visibility && <MultipleCustomHooks />}

    </>
  );
};
