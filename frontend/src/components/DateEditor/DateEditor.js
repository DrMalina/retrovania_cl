import React from 'react';

import { DayPicker } from 'components/DayPicker';
import { Modal } from 'components/Modal';

import { dateToUnixTimestamp } from 'common/helpers';

import * as S from './DateEditor.styles';

const DateEditor = props => {
  const { activator, cartAddItem, data, from, to, onResetClick } = props;

  const generateConfirm = () => {
    if (from && to) {
      return handleConfirm;
    }
    return null;
  };

  const handleConfirm = () =>
    cartAddItem({
      ...data,
      from: dateToUnixTimestamp(from),
      to: dateToUnixTimestamp(to)
    });

  const renderText = () => {
    return (
      <p>
        {!from && !to && 'Please select the first day'}
        {from && !to && 'Please select the last day'}
        {from &&
          to &&
          `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}`}
        {from && to && (
          <S.ResetButton as='button' onClick={onResetClick}>
            Reset
          </S.ResetButton>
        )}
      </p>
    );
  };

  return (
    <Modal
      activator={activator}
      onConfirm={generateConfirm()}
      title='Select dates'
    >
      {renderText()}
      <DayPicker {...props} />
    </Modal>
  );
};

export { DateEditor };
