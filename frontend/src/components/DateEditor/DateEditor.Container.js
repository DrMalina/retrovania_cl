import React, { useReducer } from 'react';
import { DateUtils } from 'react-day-picker';

import { DateEditor } from './DateEditor';
import dateReducer, {
  initState,
  MOUSE_ENTER,
  RESET,
  SELECT_FROM,
  SELECT_TO
} from './DateEditor.reducer';

const DateEditorContainer = props => {
  const [state, dispatch] = useReducer(dateReducer, initState());
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
      dispatch({ type: RESET });
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

  const handleResetClick = () => dispatch({ type: RESET });

  return (
    <DateEditor
      disabledDays={disabledDays}
      from={from}
      fromMonth={new Date()}
      modifiers={modifiers}
      onDayClick={handleDayClick}
      onDayMouseEnter={handleDayMouseEnter}
      onResetClick={handleResetClick}
      selectedDays={selectedDays}
      to={to}
      {...props}
    />
  );
};

export { DateEditorContainer };
