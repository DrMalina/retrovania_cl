import * as actions from 'redux/game/actions';
import GamesService from 'services/Games';

export const gameFetch = id => async dispatch => {
  try {
    dispatch(actions.gameFetchStart());
    const game = await GamesService.fetchById(id);
    dispatch(actions.gameFetchSuccess(game));
  } catch (error) {
    dispatch(actions.gameFetchFailure(error));
  }
};
