import React, { useState, useRef, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import * as S from './Pagination.styles';
import { Link } from 'react-router-dom';

export const Pagination = props => {
  const [activePage, setActivePage] = React.useState(1);
  const location = useLocation();

  useEffect(() => {
    console.log('dgdg');

    let params = new URLSearchParams(location.search);
    setActivePage(params.get('page'));
  }, [location]);

  const onClickPrevious = event => {
    console.log('active page', activePage);

    if (activePage === 1) {
      event.preventDefault();
      return;
    }
  };

  const onClickNext = () => {
    if (activePage === props.pageCount) {
      return;
    }
  };

  const createPages = () => {
    return Array.from(Array(props.pageCount).keys()).map((el, index) => (
      <S.LI key={index}>
        <Link to={`/games?page=${index + 1}`}>{index + 1}</Link>
      </S.LI>
    ));
  };

  console.log('before return acrie', activePage);

  return (
    <S.Ul>
      <S.LI disabled={activePage === 1}>
        <Link onClick={onClickPrevious} to={`/games?page=${activePage - 1}`}>
          Previous
        </Link>
      </S.LI>
      {createPages()}
      <S.LI disabled={activePage === props.pageCount}>
        <Link onClick={onClickNext} to={`/games?page=${activePage + 1}`}>
          Next
        </Link>
      </S.LI>
    </S.Ul>
  );
};
