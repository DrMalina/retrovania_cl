import React from 'react';

import * as S from './SearchBar.styles';

const SearchBar = ({ disabled, ...props }) => {
  return (
    <>
      <S.Input {...props} meta={false} />
      <button type='submit' disabled={disabled}>
        Search
      </button>
    </>
  );
};

export { SearchBar };
