import React from 'react';
import { useSelector } from 'react-redux';

import { GamesListItem } from 'components/GamesListItem';
import { Pagination } from 'components/Pagination';

import * as S from './GamesList.styles';

const GamesList = ({ games, gamesFetch, query }) => {
  const totalGames = useSelector(state => state.games.total);

  const renderResultsList = () => (
    <>
      {query ? <p>Results for "{query}"</p> : null}
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
      <Pagination totalGames={totalGames} onClick={gamesFetch} />
    </>
  );

  const renderNoResultsFoundMsg = () => (
    <>
      {query ? <p>No results found for "{query}"</p> : <p> No results found</p>}
      <p>Try checking your spelling or use more general terms</p>
    </>
  );

  return (
    <>{totalGames > 0 ? renderResultsList() : renderNoResultsFoundMsg()}</>
  );
};

export { GamesList };
