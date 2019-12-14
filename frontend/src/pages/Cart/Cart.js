import React from 'react';

import { Cart as CartComponent } from 'components/Cart';
import { MainHeading } from 'components/MainHeading';
import { Section } from 'components/Section';

const Cart = () => {
  return (
    <Section>
      <MainHeading>Your Cart</MainHeading>
      <CartComponent />
    </Section>
  );
};

export { Cart };
