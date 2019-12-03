import React from 'react';
import { Game } from 'components/Game';

import * as S from './GamesLists.styles';

const GamesList = ({ games }) => (
  <S.GamesListWrapper>
    {games.map(({ _id, name, summary, genres, firstReleaseDate, cover }) => (
      <Game
        id={_id}
        name={name}
        summary={summary}
        key={_id}
        genres={genres}
        firstReleaseDate={firstReleaseDate}
        cover={cover}
      />
    ))}
  </S.GamesListWrapper>
);

export { GamesList };
