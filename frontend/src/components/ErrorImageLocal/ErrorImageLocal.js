import React from 'react';
import * as S from './ErrorImageLocal.styles';

const ErrorImageLocal = () => (
  <S.ErrorImageLocalContainer>
    <img src='/images/no-signal-image.png' alt="error" />
    <S.ErrorImageLocalMessage>error</S.ErrorImageLocalMessage>
  </S.ErrorImageLocalContainer>
);

export { ErrorImageLocal };
