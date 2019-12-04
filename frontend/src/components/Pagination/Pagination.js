import React, { useState, useRef, useEffect } from 'react';

import * as S from './Pagination.styles';

export const Pagination = props => {
  const [activePage, setActivePage] = React.useState(1);
  const onClickNext = () => {
    console.log('next:', activePage, props.pageCount);
    if (activePage === props.pageCount) {
      return;
    }
    const nextPage = activePage + 1;
    setActivePage(nextPage);
    props.onClick(nextPage);
  };
  const onClickPrevious = () => {
    if (activePage === 1) {
      return;
    }
    const previousPage = activePage - 1;
    setActivePage(previousPage);
    props.onClick(previousPage);
  };
  const onClick = page => {
    console.log('page: ', page);
    console.log('active page', activePage);
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
      <S.Li onClick={onClickPrevious} disabled={activePage === 1}>
        Previous
      </S.Li>
      {createPages()}
      <S.Li onClick={onClickNext} disabled={activePage === props.pageCount}>
        Next
      </S.Li>
    </S.Ul>
  );
};
