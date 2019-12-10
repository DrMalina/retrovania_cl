import React from 'react';

import * as S from './SearchBar.styles';

const SearchBar = props => {
  return (
    <>
      <S.Input {...props} meta={false} />
      <button type='submit'>Search</button>
    </>
  );
};

export { SearchBar };
