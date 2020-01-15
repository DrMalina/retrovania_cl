import * as types from './types';

export const INITIAL_STATE = {
  error: null,
  gamesInStore: [],
  genres: [],
  loading: false,
  total: 0
};

export default function gamesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GAMES_CLEANUP:
      return {
        ...state,
        error: null,
        gamesInStore: [],
        loading: false,
        total: 0
      };
    case types.GAMES_FETCH:
      return {
        ...state,
        loading: true
      };
    case types.GAMES_FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        gamesInStore: action.payload.games.docs,
        loading: false,
        total: action.payload.games.total
      };
    case types.GAMES_FETCH_FAILURE:
      return {
        ...state,
        error: action.meta.error,
        gamesInStore: [],
        loading: false
      };
    case types.GENRES_FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        genres: action.payload.genres
      };
    case types.GENRES_FETCH_FAILURE:
      return {
        ...state,
        error: action.meta.error,
        genres: [],
        loading: false
      };
    default:
      return state;
  }
}
