import React from 'react';

import { MainHeading } from 'components/MainHeading';
import { Section } from 'components/Section';

const Game = ({ match }) => (
  <Section>
    <MainHeading>Game</MainHeading>
    <p>{match.params.id}</p>
  </Section>
);

export { Game };
