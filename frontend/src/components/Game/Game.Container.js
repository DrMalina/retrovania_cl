import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { errorHandlerLocal } from 'components/errorHandlerLocal';
import { withSpinnerLocal } from 'components/withSpinnerLocal';
import { Game } from './Game';

import { gameCleanup } from 'redux/game/actions';
import { gameFetch } from 'redux/game/utils';

const GameContainer = ({ cart, id, game, gameFetch, gameCleanup }) => {
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

  return <Game cart={cart} game={game} />;
};

const mapStateToProps = state => ({
  cart: state.cart.current,
  error: state.game.error,
  game: state.game.current,
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
