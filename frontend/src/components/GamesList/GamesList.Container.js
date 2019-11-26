import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { errorHandlerLocal } from 'components/errorHandlerLocal';
import { GamesList } from './GamesList';
import { withSpinnerLocal } from 'components/withSpinnerLocal';
import { gamesFetch } from 'redux/games/utils';

const GamesListContainer = ({ games, gamesFetch }) => {
  useEffect(() => {
    gamesFetch();
  }, [ ]);

  return <GamesList games={games} />
};

const mapStateToProps = (state) => ({
  error: state.games.error,
  games: state.games.gamesInStore,
  isLoading: state.games.loading,
});

const mapDispatchToProps = (dispatch) => ({
  gamesFetch: (limit) => dispatch(gamesFetch(limit)),
});

const EnhancedGamesListContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withSpinnerLocal,
  errorHandlerLocal,
)(GamesListContainer);

export { EnhancedGamesListContainer as GamesListContainer };
