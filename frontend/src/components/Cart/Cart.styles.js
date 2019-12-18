import styled from 'styled-components';

import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { ReactComponent as Pencil } from 'assets/icons/pencil.svg';
import { ReactComponent as Trash } from 'assets/icons/trash.svg';

import { colors, typography } from 'utils';

const { input, menu, text } = colors;
const { sizes, weights } = typography;

const CartActionButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 10px;

  & span {
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute !important;
  }

  & svg {
    height: 30px;
    width: 30px;
  }
`;

const CartButton = styled(Button)`
  font-size: ${sizes.tiny};
`;

const CartCheckout = styled.div`
  align-self: flex-end;
  font-size: ${sizes.normal};
  text-align: right;
`;

const CartLink = styled(Link)`
  font-size: inherit;
`;

const CartTable = styled.table`
  border: 3px solid ${text.secondary.hex};
  border-radius: 10px;
  border-spacing: 0;
  box-shadow: 0 0 10px -1px ${text.secondary.hex},
    0 0 7px -1px ${text.secondary.hex} inset;
  font-size: ${sizes.large};
  margin: 20px 0;
  overflow: hidden;

  & td,
  & th {
    padding: 20px 40px;
  }
`;

const CartTableBody = styled.tbody`
  font-size: ${sizes.normal};

  & td:last-child {
    text-align: center;
  }
`;

const CartTableHead = styled.thead`
  background: rgba(${menu.shadow.rgb}, 0.5);
  text-transform: uppercase;
`;

const CartWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 80px;
`;

const Highlight = styled.span`
  color: ${text.tertiary.hex};
  font-weight: ${weights.bold};
  margin: 0 5px;
`;

const PencilIcon = styled(Pencil)`
  fill: ${input.focus.hex};
`;

const TrashIcon = styled(Trash)`
  fill: ${input.error.hex};
`;

export {
  CartActionButton,
  CartButton,
  CartCheckout,
  CartLink,
  CartTable,
  CartTableBody,
  CartTableHead,
  CartWrapper,
  Highlight,
  PencilIcon,
  TrashIcon
};
