import React from 'react';
import { GamesListItem } from 'components/GamesListItem';

import * as S from './GamesList.styles';

const GamesList = ({ games }) => (
  <S.GamesListWrapper>
    {games.map(({ _id, genres, name, summary }) => (
      <GamesListItem
        genres={genres}
        id={_id}
        key={_id}
        name={name}
        summary={summary}
      />
    ))}
  </S.GamesListWrapper>
);

export { GamesList };
