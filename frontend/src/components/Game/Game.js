import React from 'react';
import './Game.css';

const Game = ({ name, summary, genres, firstReleaseDate, cover }) => {
  return (
    <div className='Game'>
      <h2>{name}</h2>
      <img src={cover} />
      <p>{new Date(firstReleaseDate * 1000).toDateString()}</p>
      <p>{genres.join(' ')}</p>
      <p>{summary}</p>
    </div>
  );
};

export { Game };
