import * as actions from 'redux/games/actions';
import GamesService from 'services/Games';

export const gamesFetch = ({
  page = 1,
  limit = 10,
  query = '',
  genres = ''
}) => async dispatch => {
  try {
    dispatch(actions.gamesFetchStart());
    const games = await GamesService.fetchMany(page, limit, query, genres);
    dispatch(actions.gamesFetchSuccess(games));
  } catch (error) {
    dispatch(actions.gamesFetchFailure(error));
  }
};

export const genresFetch = () => async dispatch => {
  try {
    const genres = await GamesService.fetchGenres();
    dispatch(actions.genresFetchSuccess(genres));
  } catch (error) {
    dispatch(actions.genresFetchFailure(error));
  }
};
