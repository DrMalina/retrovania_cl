import React from 'react';

const Game = ({ game }) =>
  game && (
    <div>
      <h2>{game.name}</h2>
      <p>{game.summary}</p>
    </div>
  );

export { Game };
