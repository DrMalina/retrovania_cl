import React, { useState } from 'react';

import { connect } from 'react-redux';
import { Button } from 'components/Button';

import { updateGame } from 'redux/game/utils';
import * as S from './Game.styles';

const GameEdit = ({ game, updateGame, cancelEdit }) => {
  const [values, setValues] = useState({
    ...game,
    firstReleaseDate: new Date(game.firstReleaseDate * 1000)
      .toISOString()
      .substr(0, 10),
    genres: game.genres.join(', ')
  });

  const handleChange = event => {
    event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = () => {
    const firstReleaseDateMilisecond = new Date(
      values.firstReleaseDate
    ).getTime();

    const updatedGame = {
      ...values,
      firstReleaseDate: firstReleaseDateMilisecond / 1000,
      genres: values.genres.split(',')
    };

    updateGame(updatedGame);
    cancelEdit();
  };

  return (
    <form onSubmit={onSubmit}>
      <Button type='submit'>Save</Button>
      <Button type='button' onClick={cancelEdit}>
        Cancel
      </Button>
      <S.GameWrapper>
        <S.GameTitle>
          <input value={values.name} name='name' onChange={handleChange} />
        </S.GameTitle>
        <S.GameSummary>
          <textarea
            rows={10}
            name='summary'
            onChange={handleChange}
            value={values.summary}
          />
        </S.GameSummary>
        <S.GameReleaseDate>
          {'Release date: '}
          <S.GameHighlight>
            <input
              type='date'
              name='firstReleaseDate'
              onChange={handleChange}
              value={values.firstReleaseDate}
            />
          </S.GameHighlight>
        </S.GameReleaseDate>
        <S.GameGenres>
          {'Genres: '}
          <S.GameHighlight>
            <input
              value={values.genres}
              name='genres'
              onChange={handleChange}
            />
          </S.GameHighlight>
        </S.GameGenres>
      </S.GameWrapper>
    </form>
  );
};

const mapDispatchToProps = {
  updateGame
};
const EnhancedGameEdit = connect(
  null,
  mapDispatchToProps
)(GameEdit);

export { EnhancedGameEdit as GameEdit };
