import React from 'react';
import * as S from './SpinnerLocal.styles';
import { PacmanLoader } from 'react-spinners';
import { colors } from 'utils/colors';

const SpinnerLocal = () => (
  <S.SpinnerLocalContainer>
    <PacmanLoader
      color={colors.text.secondary.hex}
      css={S.spinnerLocalCss}
      size={50}
      sizeUnit='px'
    />
  </S.SpinnerLocalContainer>
);

export { SpinnerLocal };
