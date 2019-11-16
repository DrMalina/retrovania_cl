import React from 'react';

import * as S from './Button.styles';

const Button = ({ type, disabled, children, ...rest }) => {
  return (
    <S.Button type={type} disabled={disabled} {...rest}>
      {children}
    </S.Button>
  );
};

export { Button };
