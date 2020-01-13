import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { DayPicker } from 'components/DayPicker';
import { Modal } from 'components/Modal';

import { renderFormFields } from 'common/helpers';

import * as S from './GameEditor.styles';

import { updateGame } from 'redux/game/utils';

const GameEditor = ({ activator, game }) => {
  const dispatch = useDispatch();

  const onConfirm = values => {
    dispatch(
      updateGame({
        ...values,
        firstReleaseDate: values.firstReleaseDate / 1000,
        genres: values.genres.split(', ')
      })
    );
  };

  return (
    <Formik
      initialValues={{
        ...game,
        firstReleaseDate: new Date(game.firstReleaseDate * 1000),
        genres: game.genres.join(', ')
      }}
      onSubmit={onConfirm}
    >
      {formikProps => {
        const { setFieldValue, values } = formikProps;
        const { firstReleaseDate } = values;

        const handleDayClick = day => {
          setFieldValue('firstReleaseDate', day);
        };

        return (
          <Modal
            activator={activator}
            confirmAttrs={{ form: 'edit-form', type: 'submit' }}
            onConfirm={() => {}}
            // ^ empty fuction just to show the confirmation button in Modal; form submission is handled by Formik
            // and the confirmation button itself - linked to GameEditorForm by `form` attribute
            title='Edit game details'
          >
            <S.GameEditorForm id='edit-form'>
              <S.GameEditorWrapper>
                {renderFormFields(['name', 'genres'])}
                {renderFormFields(['summary'], 'textarea')}
                <S.GameEditorReleaseDate>
                  <S.ReleaseDateLabel>Release Date</S.ReleaseDateLabel>
                  <DayPicker
                    name='firstReleaseDate'
                    value={firstReleaseDate}
                    initialMonth={firstReleaseDate}
                    onDayClick={handleDayClick}
                    modifiers={{
                      start: firstReleaseDate
                    }}
                  />
                </S.GameEditorReleaseDate>
              </S.GameEditorWrapper>
            </S.GameEditorForm>
          </Modal>
        );
      }}
    </Formik>
  );
};

export { GameEditor };
