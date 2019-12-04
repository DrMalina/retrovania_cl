import React from 'react';
import { GamesListItem } from 'components/GamesListItem';
import { Pagination } from '../Pagination/Pagination';

import * as S from './GamesList.styles';

const GamesList = ({ games, gamesFetch, total }) => (
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

    <Pagination pageCount={Math.ceil(total / 10)} onClick={gamesFetch} />
  </S.GamesListWrapper>
);

export { GamesList };
