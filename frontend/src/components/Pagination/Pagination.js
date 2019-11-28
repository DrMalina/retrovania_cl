import React, { useState } from 'react';

import * as S from './Pagination.styles';

export const Pagination = props => {
  const [activePage, setActivePage] = useState(1);

  const onClickNext = () => {
    const nextPage = activePage + 1;
    setActivePage(nextPage);
    props.onClick(nextPage);
  };

  const onClickPrevious = () => {
    const previousPage = activePage - 1;
    setActivePage(previousPage);
    props.onClick(previousPage);
  };

  const onClick = page => {
    setActivePage(page);
    props.onClick(page);
  };

  const createPages = () => {
    return Array.from(Array(props.pageCount).keys()).map((el, index) => (
      <S.Li onClick={() => onClick(index + 1)} key={index}>
        {index + 1}
      </S.Li>
    ));
  };

  return (
    <S.Ul>
      <S.Li onClick={onClickPrevious}>Previous</S.Li>
      {createPages()}
      <S.Li onClick={onClickNext}>Next</S.Li>
    </S.Ul>
  );
};
