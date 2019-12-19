import React, { useState } from 'react';

import { Button } from 'components/Button';
import { Link } from 'components/Link';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { cartAddItem } from 'redux/cart/actions';

import { GameDescription } from './GameDescription';
import { GameEdit } from './GameEdit';
import * as S from './Game.styles';

const Game = ({ cart, cartAddItem, game, isUserAdmin, isUserLoggedIn }) => {
  const [isEditEnabled, setEditEnabling] = useState(false);

  const renderActions = () => {
    if (isUserLoggedIn) {
      if (cart.find(({ _id }) => _id === game._id)) {
        return <p>This game is already in your cart.</p>;
      }
      return <Button onClick={() => cartAddItem(game)}>Rent it</Button>;
    }
    return (
      <p>
        <Link to={{ pathname: '/signin', state: { goBack: true } }}>
          Sign in
        </Link>{' '}
        or{' '}
        <Link to={{ pathname: '/signup', state: { goBack: true } }}>
          Sign up
        </Link>{' '}
        to rent this game.
      </p>
    );
  };

  const editGame = () => {
    if (isUserLoggedIn && isUserAdmin) {
      return <Button onClick={() => setEditEnabling(true)}>Edit</Button>;
    }
  };

  return (
    game && (
      <>
        {isEditEnabled ? (
          <GameEdit game={game} cancelEdit={() => setEditEnabling(false)} />
        ) : (
          <>
            <GameDescription game={game} />
            <S.GameActions>
              {renderActions()}
              {editGame()}
            </S.GameActions>
          </>
        )}
      </>
    )
  );
};
const mapStateToProps = state => ({
  isUserAdmin: !!state.user.current && state.user.current.role === 'admin',
  isUserLoggedIn: !!state.user.current
});

const mapDispatchToProps = {
  cartAddItem
};

const EnhancedGame = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Game);

export { EnhancedGame as Game };
