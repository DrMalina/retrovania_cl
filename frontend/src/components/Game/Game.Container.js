import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { errorHandlerLocal } from 'components/errorHandlerLocal';
import { withSpinnerLocal } from 'components/withSpinnerLocal';
import { Game } from './Game';

import { gameFetch } from 'redux/game/utils';

const GameContainer = ({ id, game, gameFetch }) => {
  useEffect(() => {
    if (!game || game._id !== id) {
      gameFetch(id);
    }
  }, []);

  return <Game game={game} />;
};

const mapStateToProps = state => ({
  error: state.game.error,
  game: state.game.current,
  isLoading: state.game.loading
});

const mapDispatchToProps = dispatch => ({
  gameFetch: id => dispatch(gameFetch(id))
});

const EnhancedGameContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withSpinnerLocal,
  errorHandlerLocal
)(GameContainer);

export { EnhancedGameContainer as GameContainer };
