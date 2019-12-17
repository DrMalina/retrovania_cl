import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { errorHandlerLocal } from 'components/errorHandlerLocal';
import { withSpinnerLocal } from 'components/withSpinnerLocal';
import { Game } from './Game';

import { cartAddItem } from 'redux/cart/actions';
import { gameCleanup } from 'redux/game/actions';
import { gameFetch } from 'redux/game/utils';

const GameContainer = ({
  cart,
  cartAddItem,
  id,
  isUserLoggedIn,
  isUserAdmin,
  game,
  gameFetch,
  gameCleanup
}) => {
  useEffect(() => {
    if (!game || game._id !== id) {
      gameFetch(id);
    }

    return () => {
      if (game) {
        gameCleanup();
      }
    };
  }, []);

  return (
    <Game
      cart={cart}
      game={game}
      isUserLoggedIn={isUserLoggedIn}
      cartAddItem={cartAddItem}
      isUserAdmin={isUserAdmin}
    />
  );
};

const mapStateToProps = state => ({
  cart: state.cart.current,
  error: state.game.error,
  game: state.game.current,
  isLoading: state.game.loading,
  isUserLoggedIn: !!state.user.current,
  isUserAdmin: !!state.user.current && state.user.current.role === 'admin'
});

const mapDispatchToProps = {
  cartAddItem,
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
