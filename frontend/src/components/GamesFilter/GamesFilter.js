import React, { useState } from 'react';

import { SearchBar } from 'components/SearchBar';

const GamesFilter = ({ onSearch, initQuery }) => {
  const [internalQuery, setInternalQuery] = useState(initQuery);
  const [isDisabled, setDisable] = useState(true);

  const handleChange = e => {
    const value = e.target.value;
    setInternalQuery(value);
    if (value.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(internalQuery);
  };

  return (
    <form onSubmit={handleSubmit} id='search' role='search'>
      <SearchBar
        name='search'
        type='search'
        id='search-input'
        placeholder='Search for a game...'
        value={internalQuery}
        onChange={handleChange}
        disabled={isDisabled}
      />
    </form>
  );
};

export { GamesFilter };
