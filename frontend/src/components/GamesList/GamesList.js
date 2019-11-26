import React from 'react';

import { Game } from 'components/Game';

const GamesList = ({ games }) => (
  <>
    {games.map(({ company, description, title, year }) => (
      <Game
        company={company}
        description={description}
        key={title + company}
        title={title}
        year={year}
      />
    ))}
  </>
);

export { GamesList };
