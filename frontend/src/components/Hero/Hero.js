import React from 'react';

import { Link } from 'components/Link';

import * as S from './Hero.styles';

const Hero = () => {
  return (
    <S.Hero>
      <S.HeroHeading>Welcome to Retrovania!</S.HeroHeading>
      <S.HeroSlogan>
        Discover a wide variety of retro classics and bring back your childhood
        memories.
      </S.HeroSlogan>
      <S.HeroCTA as={Link} to='/signup'>
        Get started
      </S.HeroCTA>
    </S.Hero>
  );
};

export { Hero };
