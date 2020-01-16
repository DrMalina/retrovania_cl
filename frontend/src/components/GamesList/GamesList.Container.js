import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'query-string';

import { GamesList } from './GamesList';

import { errorHandlerLocal } from 'components/errorHandlerLocal';
import { GamesFilter } from 'components/GamesFilter';
import { SpinnerLocal } from 'components/SpinnerLocal';

import { gamesCleanup } from 'redux/games/actions';
import { gamesFetch, genresFetch } from 'redux/games/utils';

const GamesListContainer = ({
  games,
  gamesCleanup,
  gamesFetch,
  genres,
  genresFetch,
  isLoading
}) => {
  const location = useLocation();
  const history = useHistory();
  const parsedSearchQuery = qs.parse(location.search).query || '';
  const parsedGenresQuery = qs.parse(location.search).genres || '';

  useEffect(() => {
    gamesCleanup();
    if (genres.length === 0) genresFetch();

    const params = new URLSearchParams(location.search);
    gamesFetch({
      page: params.get('page'),
      query: params.get('query'),
      genres: params.get('genres')
    });
  }, [gamesCleanup, gamesFetch, genres.length, genresFetch, location]);

  const handleSearch = (search, genres) => {
    const searchQuery = qs.stringify({
      //replace multiple whitespaces into 1 and trim
      query: search.replace(/\s\s+/g, ' ').trim()
    });

    const genresQuery = qs.stringify({
      genres: genres.join(',')
    });

    if (search && genres.length > 0) {
      history.push(`/games?${searchQuery}&${genresQuery}`);
    } else if (search && genres.length === 0) {
      history.push(`/games?${searchQuery}`);
    } else if (!search && genres.length > 0) {
      history.push(`/games?${genresQuery}`);
    } else {
      history.push('/games');
    }
  };

  return isLoading ? (
    <SpinnerLocal />
  ) : (
    <>
      <GamesFilter
        onSearch={handleSearch}
        initQuery={parsedSearchQuery}
        initGenres={parsedGenresQuery}
      />
      <GamesList
        games={games}
        gamesFetch={gamesFetch}
        query={parsedSearchQuery}
      />
    </>
  );
};

const mapStateToProps = state => ({
  games: state.games.gamesInStore,
  genres: state.games.genres,
  isLoading: state.games.loading
});

const mapDispatchToProps = {
  gamesCleanup,
  gamesFetch,
  genresFetch
};

const EnhancedGamesListContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  errorHandlerLocal
)(GamesListContainer);

export { EnhancedGamesListContainer as GamesListContainer };
