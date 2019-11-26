import * as actions from 'redux/games/actions';
import GamesService from 'services/Games';

export const gamesFetch = (limit = 150) => async dispatch => {
  try {
    dispatch(actions.gamesFetchStart());
    const games = await GamesService.fetch(limit);
    dispatch(actions.gamesFetchSuccess(games));
  } catch (error) {
    dispatch(actions.gamesFetchFailure(error));
  }
};
