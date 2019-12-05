import React from 'react';

import { Game as GameComponent } from 'components/Game';
import { MainHeading } from 'components/MainHeading';
import { Section } from 'components/Section';

const Game = ({ match }) => (
  <Section>
    <MainHeading>Game Details</MainHeading>
    <GameComponent id={match.params.id} />
  </Section>
);

export { Game };
