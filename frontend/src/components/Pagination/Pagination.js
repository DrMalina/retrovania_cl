import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';

import * as S from './Pagination.styles';
import { Link } from 'components/Link';

const Pagination = ({ totalGames }) => {
  const [activePage, setActivePage] = useState(1);
  const location = useLocation();

  const pageCount = Math.ceil(totalGames / 10);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get('page');
    if (page) {
      setActivePage(+page);
    }
  }, [location]);

  const handleArrowLinkClick = (event, page) => {
    if (activePage === page) {
      event.preventDefault();
      return;
    }
  };

  const getPageLink = page => {
    const parsed = { ...qs.parse(location.search), page };
    return `/games?${qs.stringify(parsed)}`;
  };

  return (
    <S.Ul>
      <S.LI
        as={Link}
        disabled={activePage === 1}
        onClick={e => handleArrowLinkClick(e, 1)}
        to={getPageLink(activePage - 1)}
      >
        Previous
      </S.LI>
      {[...Array(pageCount).keys()].map((el, index) => (
        <S.LI
          as={Link}
          key={index}
          active={activePage === index + 1 ? 'active' : null}
          to={getPageLink(index + 1)}
        >
          {index + 1}
        </S.LI>
      ))}
      <S.LI
        as={Link}
        disabled={activePage === pageCount}
        onClick={e => handleArrowLinkClick(e, pageCount)}
        to={getPageLink(activePage + 1)}
      >
        Next
      </S.LI>
    </S.Ul>
  );
};

export { Pagination };
