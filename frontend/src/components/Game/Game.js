import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Button } from 'components/Button';
import { DateEditor } from 'components/DateEditor';
import { GameEditor } from 'components/GameEditor';
import { Link } from 'components/Link';

import { cartAddItem } from 'redux/cart/actions';

import * as S from './Game.styles';

const Game = ({ cart, game, isUserLoggedIn, isUserAdmin }) => {
  const isInCart = () => {
    return !!cart.find(({ _id }) => _id === game._id);
  };

  const renderText = () => {
    if (isUserLoggedIn && isInCart()) {
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

  const renderActions = () => {
    const cartButtonText = isInCart() ? 'Edit cart' : 'Add to cart';

    return (
      <S.GameActionButtons>
        {isUserLoggedIn && (
          <DateEditor
            activator={({ setIsOpened }) => (
              <Button onClick={() => setIsOpened(true)}>
                {cartButtonText}
              </Button>
            )}
            data={game}
          />
        )}
        {isUserLoggedIn && isUserAdmin && (
          <GameEditor
            activator={({ setIsOpened }) => (
              <Button onClick={() => setIsOpened(true)}>Edit game</Button>
            )}
            game={game}
          />
        )}
      </S.GameActionButtons>
    );
  };

  return (
    cart &&
    game && (
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
          {renderActions()}
        </S.GameActions>
      </S.GameWrapper>
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
