import React, { useState } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { cartAddItem } from 'redux/cart/actions';

import { GameDescription } from './GameDescription';
import { GameEdit } from './GameEdit';

const Game = ({ cart, cartAddItem, game, isUserAdmin, isUserLoggedIn }) => {
  const [isEditEnabled, setEditEnabling] = useState(false);

  return (
    cart &&
    game && (
      <>
        {isEditEnabled ? (
          <GameEdit
            isUserAdmin={isUserAdmin}
            game={game}
            cancelEdit={() => setEditEnabling(false)}
            setEditEnabling={setEditEnabling}
          />
        ) : (
          <>
            <GameDescription
              cart={cart}
              game={game}
              isUserLoggedIn={isUserLoggedIn}
            />
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
