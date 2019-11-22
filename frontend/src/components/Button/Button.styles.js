import styled from 'styled-components';

import { animations, colors, typography } from 'utils';

const { borderFlicker, textGlow } = animations;
const { border, textShadow } = colors.button;
const { text } = colors;
const { families, sizes } = typography;

const Button = styled.button`
  background: transparent;
  border: 3px solid ${border.dark.hex};
  border-radius: 10px;
  box-shadow: 0 0 10px -1px ${border.dark.hex},
    0 0 7px -1px ${border.dark.hex} inset;
  color: rgba(${text.secondary.rgb}, 0.7);
  cursor: pointer;
  font-family: ${families.cursive};
  font-size: ${sizes.small};
  letter-spacing: 1px;
  padding: 26px 54px 23px 57px;
  text-transform: uppercase;

  &:hover {
    animation: ${textGlow(textShadow.light.hex, textShadow.medium.hex)} 1s
        ease-in-out infinite alternate,
      ${borderFlicker(border.light.hex, border.dark.hex)} 3s linear infinite;
    color: ${text.primary.hex};
    transition: color 0.5s;
  }
`;

export { Button };
