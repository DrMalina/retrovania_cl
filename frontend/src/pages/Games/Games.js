import React from 'react';
import { Game } from 'components/Game/';

const exampleDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const exampleData = [
  {
    title: 'Super Mario Bros',
    year: 1985,
    company: 'Nintendo',
    description: exampleDescription
  },
  {
    title: 'Contra',
    year: 1988,
    company: 'Konami',
    description: exampleDescription
  },
  {
    title: 'Battle City',
    year: 1985,
    company: 'Namco',
    description: exampleDescription
  }
];

const Games = () => {
  const renderGames = data => {
    return data.map(({ company, description, title, year }) => {
      return (
        <Game
          company={company}
          description={description}
          key={title + company}
          title={title}
          year={year}
        />
      );
    });
  };
  return <div>{renderGames(exampleData)}</div>;
};

export { Games };
