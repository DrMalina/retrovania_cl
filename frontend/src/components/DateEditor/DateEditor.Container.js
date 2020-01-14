import React, { useReducer } from 'react';
import { DateUtils } from 'react-day-picker';
import { connect } from 'react-redux';

import { DateEditor } from './DateEditor';
import dateReducer, {
  initState,
  MOUSE_ENTER,
  RESET,
  SELECT_FROM,
  SELECT_TO
} from './DateEditor.reducer';

import { cartAddItem } from 'redux/cart/actions';

const DateEditorContainer = props => {
  const { rentalFrom, rentalTo } = props;

  const [state, dispatch] = useReducer(
    dateReducer,
    initState(rentalFrom, rentalTo)
  );
  const { enteredTo, from, to } = state;

  const disabledDays = [
    { before: new Date() },
    { before: from, after: from && DateUtils.addMonths(from, 1) }
  ];
  const modifiers = { start: from, end: enteredTo };
  const selectedDays = [from, { from, to: enteredTo }];

  const isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  };

  const handleDayClick = (day, modifiers = {}) => {
    if (modifiers.disabled) {
      return;
    }
    if (from && to && day >= from && day <= to) {
      handleResetClick();
      return;
    }
    if (isSelectingFirstDay(from, to, day)) {
      dispatch({
        type: SELECT_FROM,
        payload: { day }
      });
    } else {
      dispatch({
        type: SELECT_TO,
        payload: { day }
      });
    }
  };

  const handleDayMouseEnter = day => {
    if (!isSelectingFirstDay(from, to, day)) {
      dispatch({ type: MOUSE_ENTER, payload: { day } });
    }
  };

  const handleResetClick = () =>
    dispatch({
      type: RESET,
      payload: {
        from: null,
        to: null
      }
    });

  const restoreInitialDates = () => {
    dispatch({
      type: RESET,
      payload: {
        from: rentalFrom,
        to: rentalTo
      }
    });
  };

  return (
    <DateEditor
      disabledDays={disabledDays}
      from={from}
      fromMonth={new Date()}
      modifiers={modifiers}
      onDayClick={handleDayClick}
      onDayMouseEnter={handleDayMouseEnter}
      onResetClick={handleResetClick}
      onClose={restoreInitialDates}
      selectedDays={selectedDays}
      to={to}
      {...props}
    />
  );
};

const mapDispatchToProps = {
  cartAddItem
};

const EnhancedDateEditorContainer = connect(
  null,
  mapDispatchToProps
)(DateEditorContainer);

export { EnhancedDateEditorContainer as DateEditorContainer };
