import React from 'react';
import './Game.css';

const Game = ({ company, description, title, year }) => {
  return (
    <div className='Game'>
      <h2>{title}</h2>
      <p>{year} </p>
      <p>{company} </p>
      <p>{description}</p>
    </div>
  );
};

export { Game };
