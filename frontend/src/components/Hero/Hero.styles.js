import styled from 'styled-components';

import { Button } from 'components/Button/Button.styles';
import { MainHeading } from 'components/MainHeading';

import heroImage from 'assets/images/hero-bg-qhd.jpg';

import { colors, typography } from 'utils';

const { background, border } = colors.button;
const { sizes } = typography;

const Hero = styled.header`
  align-items: center;
  background: url(${heroImage}) center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 200px;
  position: relative;
  text-align: center;
  width: 100%;
`;

const HeroCTA = styled(Button)`
  background: rgba(${background.rgb}, 0.75);
`;

const HeroHeading = styled(MainHeading)`
  margin: 50px 0;
`;

const HeroSlogan = styled.p`
  font-size: ${sizes.xLarge};
  line-height: 1.35;
  margin: 0 160px 70px;
  text-shadow: 1px 1px 10px rgba(${border.light.rgb}, 0.6);
`;

export { Hero, HeroCTA, HeroHeading, HeroSlogan };
