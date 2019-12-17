import React from 'react';

import * as S from './Game.styles';

const GameDescription = ({ game }) => {
  return (
    <S.GameWrapper>
      <S.GameTitle>{game.name}</S.GameTitle>
      <S.GameSummary>{game.summary}</S.GameSummary>
      <S.GameReleaseDate>
        {'Release date: '}
        <S.GameHighlight>
          {new Date(game.firstReleaseDate * 1000).toLocaleDateString()}
        </S.GameHighlight>
      </S.GameReleaseDate>
      <S.GameGenres>
        {'Genres: '}
        <S.GameHighlight>{game.genres.join(', ')}</S.GameHighlight>
      </S.GameGenres>
    </S.GameWrapper>
  );
};

export { GameDescription };
