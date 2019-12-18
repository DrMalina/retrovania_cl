import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { gamesFetch } from 'redux/games/utils';
import { useLocation } from 'react-router-dom';

import { GamesList } from './GamesList';

import { errorHandlerLocal } from 'components/errorHandlerLocal';
import { GamesFilter } from 'components/GamesFilter';
import { SpinnerLocal } from 'components/SpinnerLocal';

const GamesListContainer = ({ games, gamesFetch, total, isLoading }) => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    gamesFetch(params.get('page'));
  }, [location]);

  return isLoading ? (
    <SpinnerLocal />
  ) : (
    <>
      <GamesFilter />
      <GamesList games={games} gamesFetch={gamesFetch} total={total} />
    </>
  );
};

const mapStateToProps = state => ({
  error: state.games.error,
  games: state.games.gamesInStore,
  total: state.games.total,
  isLoading: state.games.loading
});

const mapDispatchToProps = {
  gamesFetch
};

const EnhancedGamesListContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  errorHandlerLocal
)(GamesListContainer);

export { EnhancedGamesListContainer as GamesListContainer };
