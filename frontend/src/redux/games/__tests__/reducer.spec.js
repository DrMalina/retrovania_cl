import * as actions from '../actions';
import gamesReducer, { INITIAL_STATE } from '../reducer';

describe('games reducer', () => {
  it('should return the initial state', () => {
    expect(gamesReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle GAMES_FETCH', () => {
    expect(gamesReducer(INITIAL_STATE, actions.gamesFetchStart())).toEqual({
      ...INITIAL_STATE,
      loading: true
    });
  });

  it('should handle GAMES_FETCH_SUCCESS', () => {
    const state = gamesReducer(INITIAL_STATE, actions.gamesFetchStart());

    expect(state).toEqual({
      ...INITIAL_STATE,
      loading: true
    });

    const games = {
      docs: ['game 1', 'game 2'],
      total: 2
    };

    expect(gamesReducer(state, actions.gamesFetchSuccess(games))).toEqual({
      ...state,
      gamesInStore: games.docs,
      loading: false,
      total: 2
    });
  });

  it('should handle GAMES_FETCH_FAILURE', () => {
    const state = gamesReducer(INITIAL_STATE, actions.gamesFetchStart());

    expect(state).toEqual({
      ...INITIAL_STATE,
      loading: true
    });

    const error = new Error('oops! something went wrong!');

    expect(gamesReducer(state, actions.gamesFetchFailure(error))).toEqual({
      ...state,
      error,
      gamesInStore: [],
      loading: false
    });
  });
});
