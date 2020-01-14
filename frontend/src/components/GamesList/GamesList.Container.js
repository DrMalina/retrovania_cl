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
import { gamesFetch } from 'redux/games/utils';

const GamesListContainer = ({ games, gamesCleanup, gamesFetch, isLoading }) => {
  const location = useLocation();
  const history = useHistory();
  const parsedSearchQuery = qs.parse(location.search).query || '';

  useEffect(() => {
    gamesCleanup();
    const params = new URLSearchParams(location.search);
    gamesFetch({ page: params.get('page'), query: params.get('query') });
  }, [gamesCleanup, gamesFetch, location]);

  const handleSearch = search => {
    const searchQuery = qs.stringify({
      //replace multiple whitespaces into 1 and trim
      query: search.replace(/\s\s+/g, ' ').trim()
    });
    history.push(`/games?${searchQuery}`);
  };

  return isLoading ? (
    <SpinnerLocal />
  ) : (
    <>
      <GamesFilter onSearch={handleSearch} initQuery={parsedSearchQuery} />
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
  isLoading: state.games.loading
});

const mapDispatchToProps = {
  gamesCleanup,
  gamesFetch
};

const EnhancedGamesListContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  errorHandlerLocal
)(GamesListContainer);

export { EnhancedGamesListContainer as GamesListContainer };
