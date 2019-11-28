import React, { useState } from 'react';

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
      <li onClick={() => onClick(index + 1)} key={index}>
        {index + 1}
      </li>
    ));
  };

  return (
    <ul>
      <li onClick={onClickPrevious}>Previous</li>
      {createPages()}
      <li onClick={onClickNext}>Next</li>
    </ul>
  );
};
