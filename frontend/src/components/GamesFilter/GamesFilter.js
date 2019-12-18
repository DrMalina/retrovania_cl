import React, { useState } from 'react';

import { SearchBar } from 'components/SearchBar';

const GamesFilter = ({ onSearch, initQuery }) => {
  const [internalQuery, setInternalQuery] = useState(initQuery);

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
        onChange={e => setInternalQuery(e.target.value)}
      />
    </form>
  );
};

export { GamesFilter };
