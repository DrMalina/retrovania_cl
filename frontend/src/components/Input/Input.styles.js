import styled from 'styled-components';

import { colors, typography } from 'utils';

import checkmark from 'assets/icons/checkmark.svg';
import exclamationMark from 'assets/icons/exclamation-solid.svg';

const { input } = colors;
const { sizes, weights } = typography;

const InputWrapper = styled.div`
  margin: 15px 0;

  &:last-of-type {
    margin-bottom: 60px;
  }
`;

const Input = styled.input`
  background: transparent;
  background-image: ${({ meta }) =>
    meta.touched
      ? meta.error
        ? `url(${exclamationMark})`
        : `url(${checkmark})`
      : 'none'};
  background-position: right 20px center;
  background-repeat: no-repeat;
  border: 3px solid ${input.border.hex};
  border-radius: 10px;
  box-shadow: ${({ meta }) =>
    meta.error && meta.touched
      ? `0 0 10px ${input.error.hex}, 0 0 10px ${input.error.hex} inset`
      : 'none'};
  color: inherit;
  font-size: ${sizes.normal};
  height: 60px;
  padding-left: 20px;
  padding-right: ${({ meta }) => (meta.touched ? '60px' : '20px')};
  width: 625px;

  &:focus {
    box-shadow: 0 0 10px ${input.focus.hex}, 0 0 10px ${input.focus.hex} inset;
    outline: none;
  }
`;

const Label = styled.label`
  display: block;
  font-size: ${sizes.large};
  font-weight: ${weights.medium};
  margin-bottom: 15px;
`;

const ErrorMessage = styled.div`
  color: ${input.error.hex};
  font-size: ${sizes.small};
  margin: 15px 0 0 20px;
`;

export { ErrorMessage, Input, InputWrapper, Label };
