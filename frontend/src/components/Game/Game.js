import React from 'react';
import './Game.css';

import { Button } from 'components/Button';
import { Link } from 'components/Link';

const Game = ({ id, name, summary, genres, firstReleaseDate, cover }) => {
  return (
    <div className='Game'>
      <h2>{name}</h2>
      <img src={cover} />
      <p>{new Date(firstReleaseDate * 1000).toDateString()}</p>
      <p>{genres.join(' ')}</p>
      <p>{summary}</p>
      <Button as={Link} to={`/games/${id}`}>
        See more
      </Button>
    </div>
  );
};

export { Game };
