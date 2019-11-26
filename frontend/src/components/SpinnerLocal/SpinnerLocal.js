import React from 'react';
import { PacmanLoader } from 'react-spinners';
import './spinnerLocal.css';

const SpinnerLocal = () => (
  <div className="spinner-local__container">
    <PacmanLoader
      color={'#df28fe'}
      size={50}
      sizeUnit={'px'}
    />
  </div>
);

export { SpinnerLocal };
