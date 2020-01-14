import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Button } from 'components/Button';
import { DateEditor } from 'components/DateEditor';
import { GameEditor } from 'components/GameEditor';
import { Link } from 'components/Link';

import { unixTimestampToDate } from 'common/helpers';

import { cartAddItem } from 'redux/cart/actions';

import * as S from './Game.styles';

const Game = ({ game, gameInCart, isUserLoggedIn, isUserAdmin }) => {
  const renderText = () => {
    if (isUserLoggedIn && gameInCart) {
      return (
        <>
          <p>This game is already in your cart.</p>
          <p>
            Rental from{' '}
            <S.GameHighlight>
              {unixTimestampToDate(gameInCart.from).toLocaleDateString()}
            </S.GameHighlight>{' '}
            to{' '}
            <S.GameHighlight>
              {unixTimestampToDate(gameInCart.to).toLocaleDateString()}
            </S.GameHighlight>
          </p>
        </>
      );
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
    const cartButtonText = gameInCart ? 'Edit cart' : 'Add to cart';

    return (
      <S.GameActionButtons>
        {isUserLoggedIn && (
          <DateEditor
            activator={({ setIsOpened }) => (
              <Button onClick={() => setIsOpened(true)}>
                {cartButtonText}
              </Button>
            )}
            rentalFrom={gameInCart && unixTimestampToDate(gameInCart.from)}
            rentalTo={gameInCart && unixTimestampToDate(gameInCart.to)}
            game={game}
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
    game && (
      <S.GameWrapper>
        <S.GameTitle>{game.name}</S.GameTitle>
        <S.GameSummary>{game.summary}</S.GameSummary>
        <S.GameReleaseDate>
          {'Release date: '}
          <S.GameHighlight>
            {new Date(
              unixTimestampToDate(game.firstReleaseDate)
            ).toLocaleDateString()}
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
