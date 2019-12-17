import React, { useState } from 'react';
import * as S from './Game.styles';
import { Form } from 'components/Form/Form';
import { Formik } from 'formik';
import { Button } from 'components/Button';
import { connect } from 'react-redux';
import { updateGame } from 'redux/game/utils';

const GameEdit = ({ game, updateGame, onEdit, onCancel }) => {
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
      game.firstReleaseDate
    ).getTime();

    const updatedGame = {
      ...values,
      firstReleaseDate: firstReleaseDateMilisecond,
      genres: values.genres.split(',')
    };
    updateGame(updatedGame);
    onEdit();
  };

  return (
    <Formik
      initialValues={values}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        onSubmit();
      }}
    >
      {props => (
        <Form onSubmit={props.handleSubmit}>
          <Button type='submit'>Save</Button>
          <Button type='button' onClick={onCancel}>
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
        </Form>
      )}
    </Formik>
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
