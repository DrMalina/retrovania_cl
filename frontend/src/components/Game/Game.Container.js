import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { errorHandlerLocal } from 'components/errorHandlerLocal';
import { withSpinnerLocal } from 'components/withSpinnerLocal';
import { Game } from './Game';

import { gameCleanup } from 'redux/game/actions';
import { gameFetch } from 'redux/game/utils';

const GameContainer = ({ id, game, gameFetch, gameCleanup, gameInCart }) => {
  useEffect(() => {
    if (!game || game._id !== id) {
      gameFetch(id);
    }

    return () => {
      if (game) {
        gameCleanup();
      }
    };
  }, [game, gameCleanup, gameFetch, id]);

  return <Game game={game} gameInCart={gameInCart} />;
};

const mapStateToProps = state => ({
  error: state.game.error,
  game: state.game.current,
  gameInCart:
    state.game.current &&
    state.cart.current.find(({ _id }) => _id === state.game.current._id),
  isLoading: state.game.loading
});

const mapDispatchToProps = {
  gameFetch,
  gameCleanup
};

const EnhancedGameContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withSpinnerLocal,
  errorHandlerLocal
)(GameContainer);

export { EnhancedGameContainer as GameContainer };
