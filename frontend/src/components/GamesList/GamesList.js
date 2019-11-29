import React from 'react';
import { Game } from 'components/Game';

import * as S from './GamesLists.styles';

const GamesList = ({ games }) => (
  <S.GamesListWrapper>
    {games.map(({ name, summary, genres, firstReleaseDate, cover }) => (
      <Game
        name={name}
        summary={summary}
        key={name}
        genres={genres}
        firstReleaseDate={firstReleaseDate}
        cover={cover}
      />
    ))}
  </S.GamesListWrapper>
);

export { GamesList };
