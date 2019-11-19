// utilities:
import * as messages from 'redux/messages';

const INITIAL_STATE = {
  example: 'example',
};

export default function placeholderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case messages.PLACEHOLDER_CLEANUP:
      return INITIAL_STATE;
    case messages.PLACEHOLDER_CHANGE_EXAMPLE:
      return {
        ...state,
        example: action.payload.newExample,
      };
    default:
      return state;
  }
}
