import React from 'react';
import * as S from './SpinnerLocal.styles';
import { PacmanLoader } from 'react-spinners';
import { colors } from 'utils/colors';

const SpinnerLocal = () => (
  <S.SpinnerLocalContainer>
    <PacmanLoader color={colors.text.secondary.hex} size={50} sizeUnit='50' />
  </S.SpinnerLocalContainer>
);

export { SpinnerLocal };
