export const MOUSE_ENTER = 'MOUSE_ENTER';
export const RESET = 'RESET';
export const SELECT_FROM = 'SELECT_FROM';
export const SELECT_TO = 'SELECT_TO';

export const initState = (from = null, to = null, enteredTo = to) => ({
  from,
  to,
  enteredTo
});

export default (state, action) => {
  switch (action.type) {
    case MOUSE_ENTER:
      return {
        ...state,
        enteredTo: action.payload.day
      };
    case SELECT_FROM:
      return {
        ...state,
        from: action.payload.day,
        to: null,
        enteredTo: null
      };
    case SELECT_TO:
      return {
        ...state,
        to: action.payload.day,
        enteredTo: action.payload.day
      };
    case RESET:
      return initState(action.payload.from, action.payload.to);
    default:
      return state;
  }
};
