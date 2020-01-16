import React, { useState } from 'react';

import { GenresFilter } from './GenresFilter';
import { SearchBar } from 'components/SearchBar';

const GamesFilter = ({ onSearch, initQuery, initGenres }) => {
  const [internalQuery, setInternalQuery] = useState(initQuery);
  const [selectedGenres, selectGenre] = useState([]);
  const [isSelectEmpty, toggleSelect] = useState(false);

  const handleInputChange = e => {
    const value = e.target.value;
    setInternalQuery(value);
  };

  const handleSelectChange = options => {
    if (!options || options.length === 0) {
      toggleSelect(true); // when user removes selected options
      return selectGenre([]);
    }
    const genresArray = options.map(genre => genre.value);
    selectGenre([...genresArray]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let searchedGenres;
    // edge cases of query and genres input:
    if (
      selectedGenres.length === 0 &&
      initGenres &&
      internalQuery &&
      !isSelectEmpty
    ) {
      searchedGenres = initGenres.split(',');
    } else {
      searchedGenres = selectedGenres;
    }
    onSearch(internalQuery, searchedGenres);
  };

  return (
    <form onSubmit={handleSubmit} id='filter-form'>
      <GenresFilter
        onGenreChange={handleSelectChange}
        initGenres={initGenres}
      />
      <SearchBar
        role='search'
        name='search-input'
        type='search'
        id='search-input'
        placeholder='Search for a game...'
        value={internalQuery}
        onChange={handleInputChange}
        disabled={false}
      />
    </form>
  );
};

export { GamesFilter };
