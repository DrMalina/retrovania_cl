import styled from 'styled-components';

import { colors, typography } from 'utils';

const { text } = colors;
const { families, sizes } = typography;

const MainHeading = styled.h1`
  color: ${text.secondary.hex};
  font-family: ${families.cursive};
  font-size: ${sizes.huge};
  line-height: 1.5;
  text-shadow: 2px 2px 40px;
`;

export { MainHeading };
