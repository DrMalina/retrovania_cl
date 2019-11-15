import styled from 'styled-components';

import { colors, typography } from 'utils';

const { text } = colors;
const { sizes } = typography;

const Link = styled.a`
  color: ${text.secondary.hex};
  font-family: inherit;
  font-size: ${sizes.normal};
  text-decoration: none;
  transition: all 0.2s ease-in;

  &:hover {
    filter: brightness(110%);
    text-shadow: 0px 0px 10px;
  }
`;

export { Link };
