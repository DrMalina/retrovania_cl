import React, { useState } from 'react';
import { GameDescription } from './GameDescription';
import { GameEdit } from './GameEdit';

import { Button } from 'components/Button';
import { Link } from 'components/Link';

import * as S from './Game.styles';

const Game = ({ cart, cartAddItem, game, isUserLoggedIn, isUserAdmin }) => {
  const [isEditEnable, setEditEnable] = useState(false);

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
      return <Button onClick={() => setEditEnable(true)}>Edit</Button>;
    }
  };

  return (
    game && (
      <>
        {isEditEnable ? (
          <GameEdit
            game={game}
            onEdit={() => setEditEnable(false)}
            onCancel={() => setEditEnable(false)}
          />
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

export { Game };
