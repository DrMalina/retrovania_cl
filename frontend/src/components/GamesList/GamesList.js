import React from 'react';
import { GamesListItem } from 'components/GamesListItem';
import { Pagination } from '../Pagination/Pagination';

import * as S from './GamesList.styles';

const GamesList = ({ games, gamesFetch }) => (
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

    <Pagination pageCount={3} onClick={gamesFetch} />
  </S.GamesListWrapper>
);

export { GamesList };
