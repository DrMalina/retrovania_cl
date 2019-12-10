import * as actions from '../actions';
import * as types from '../types';

describe('actions', () => {
  it('should create an action of type GAMES_FETCH', () => {
    expect(actions.gamesFetchStart()).toEqual({
      type: types.GAMES_FETCH
    });
  });

  it('should create an action of type GAMES_FETCH_SUCCESS', () => {
    const games = {};
    expect(actions.gamesFetchSuccess(games)).toEqual({
      type: types.GAMES_FETCH_SUCCESS,
      payload: {
        games
      }
    });
  });

  it('should create an action of type GAMES_FETCH_FAILURE', () => {
    const error = new Error('oops! something went wrong!');
    expect(actions.gamesFetchFailure(error)).toEqual({
      type: types.GAMES_FETCH_FAILURE,
      meta: {
        error
      }
    });
  });
});
