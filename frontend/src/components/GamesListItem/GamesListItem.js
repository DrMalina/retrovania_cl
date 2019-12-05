import React from 'react';

import { Link } from 'components/Link';
import { truncateString } from 'common/helpers';

import * as S from './GamesListItem.styles';

const GamesListItem = ({ id, genres, name, summary }) => {
  return (
    <S.GamesListItemWrapper>
      <S.GameDetails>
        <S.GameTitle>{name}</S.GameTitle>
        <S.GameGenres>
          {'Genres: '}
          <S.GameHighlight>{genres.join(', ')}</S.GameHighlight>
        </S.GameGenres>
        <S.GameSummary>{summary && truncateString(summary, 150)}</S.GameSummary>
      </S.GameDetails>
      <S.GameLink as={Link} to={`/games/${id}`}>
        See more
      </S.GameLink>
    </S.GamesListItemWrapper>
  );
};

export { GamesListItem };
