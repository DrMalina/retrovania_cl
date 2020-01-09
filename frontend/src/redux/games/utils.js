import * as actions from 'redux/games/actions';
import GamesService from 'services/Games';

export const gamesFetch = ({
  page = 1,
  limit = 10,
  query = ''
}) => async dispatch => {
  try {
    dispatch(actions.gamesFetchStart());
    const games = await GamesService.fetchMany(page, limit, query);
    dispatch(actions.gamesFetchSuccess(games));
  } catch (error) {
    dispatch(actions.gamesFetchFailure(error));
  }
};
