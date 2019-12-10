import * as types from './types';

const INITIAL_STATE = {
  current: null,
  error: null,
  loading: false
};

export default function gameReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GAME_CLEANUP:
      return {
        ...state,
        ...INITIAL_STATE
      };
    case types.GAME_FETCH:
      return {
        ...state,
        loading: true
      };
    case types.GAME_FETCH_SUCCESS:
      return {
        ...state,
        current: action.payload.game.gameData,
        error: null,
        loading: false
      };
    case types.GAME_FETCH_FAILURE:
      return {
        ...state,
        current: null,
        error: action.meta.error,
        loading: false
      };
    default:
      return state;
  }
}
