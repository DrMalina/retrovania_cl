import React from 'react';

import * as S from './SearchBar.styles';

const SearchBar = ({ disabled, ...props }) => {
  return (
    <>
      <S.Input {...props} meta={false} />
      <S.Button type='submit' disabled={disabled}>
        Search
      </S.Button>
    </>
  );
};

export { SearchBar };
