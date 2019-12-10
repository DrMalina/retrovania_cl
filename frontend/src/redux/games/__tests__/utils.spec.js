import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import * as utils from '../utils';
import { INITIAL_STATE } from '../reducer';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('actions/utils', () => {
  it('should fetch games', () => {
    expect.assertions(1);

    const store = mockStore(INITIAL_STATE);

    return store.dispatch(utils.gamesFetch()).then(() => {
      const games = {};

      const expectedActions = [
        actions.gamesFetchStart(),
        actions.gamesFetchSuccess(games)
      ];

      expect(store.getActions()).toMatchObject(expectedActions);
    });
  });
});
