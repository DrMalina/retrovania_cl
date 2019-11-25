import React from 'react';

import { GamesList } from 'components/GamesList';
import { MainHeading } from 'components/MainHeading';
import { Section } from 'components/Section';

const Games = () => (
  <Section>
    <MainHeading>Games</MainHeading>
    <GamesList />
  </Section>
);

export { Games };
