import React from 'react';

import { Button } from 'components/Button';
import { DateEditor } from 'components/DateEditor';
import { Link } from 'components/Link';

import * as S from './Game.styles';

const GameDescription = ({
  cart,
  game,
  isUserLoggedIn,
  isUserAdmin,
  setEditEnabling
}) => {
  const isInCart = cart.find(({ _id }) => _id === game.id);

  const renderText = () => {
    if (isUserLoggedIn && isInCart) {
      return <p>This game is already in your cart.</p>;
    }
    if (!isUserLoggedIn) {
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
    }
  };

  const renderCartAction = () => {
    const buttonText = isInCart ? 'Edit' : 'Add to cart';

    return (
      isUserLoggedIn && (
        <DateEditor
          activator={({ setIsOpened }) => (
            <Button onClick={() => setIsOpened(true)}>{buttonText}</Button>
          )}
          data={game}
        />
      )
    );
  };

  const renderEditAction = () => {
    if (isUserLoggedIn && isUserAdmin) {
      return <Button onClick={() => setEditEnabling(true)}>Edit</Button>;
    }
  };

  return (
    <S.GameWrapper>
      <S.GameTitle>{game.name}</S.GameTitle>
      <S.GameSummary>{game.summary}</S.GameSummary>
      <S.GameReleaseDate>
        {'Release date: '}
        <S.GameHighlight>
          {new Date(game.firstReleaseDate * 1000).toLocaleDateString()}
        </S.GameHighlight>
      </S.GameReleaseDate>
      <S.GameGenres>
        {'Genres: '}
        <S.GameHighlight>{game.genres.join(', ')}</S.GameHighlight>
      </S.GameGenres>
      <S.GameActions>
        {renderText()}
        {renderCartAction()}
        {renderEditAction()}
      </S.GameActions>
    </S.GameWrapper>
  );
};

export { GameDescription };
