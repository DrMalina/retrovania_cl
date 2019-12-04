import React from 'react';

import { Game as GameComponent } from 'components/Game';
import { MainHeading } from 'components/MainHeading';
import { Section } from 'components/Section';

const Game = ({ match }) => (
  <Section>
    <MainHeading>Game</MainHeading>
    <p>{match.params.id}</p>
    <GameComponent id={match.params.id} />
  </Section>
);

export { Game };
