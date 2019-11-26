import * as types from './types';

const INITIAL_STATE = {
  error: null,
  gamesInStore: [],
  loading: false
};

export default function gamesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GAMES_FETCH:
      return {
        ...state,
        loading: true
      };
    case types.GAMES_FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        gamesInStore: action.payload.games,
        loading: false
      };
    case types.GAMES_FETCH_FAILURE:
      return {
        ...state,
        error: action.meta.error,
        gamesInStore: [],
        loading: false
      };
    default:
      return state;
  }
}
