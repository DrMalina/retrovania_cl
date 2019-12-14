import styled from 'styled-components';

import { colors, typography } from 'utils';

const { text } = colors;
const { sizes, weights } = typography;

const CartTable = styled.table`
  border: 3px solid ${text.secondary.hex};
  border-radius: 10px;
  box-shadow: 0 0 10px -1px ${text.secondary.hex},
    0 0 7px -1px ${text.secondary.hex} inset;
  font-size: ${sizes.large};
  padding: 40px;
`;

const CartTableHead = styled.thead`
  font-weight: ${weights.medium};
  text-transform: uppercase;
`;

export { CartTable, CartTableHead };
