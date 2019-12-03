import React from 'react';
import './GamesListItem.css';

import { Button } from 'components/Button';
import { Link } from 'components/Link';

const GamesListItem = ({ id, name, summary, genres, firstReleaseDate, cover }) => {
  return (
    <div className='GamesListItem'>
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

export { GamesListItem };
