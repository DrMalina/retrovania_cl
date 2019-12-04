import React from 'react';

import * as S from './Form.styles';

const Form = ({ children, ...props }) => {
  return (
    <S.Form autoComplete='off' {...props}>
      {children}
    </S.Form>
  );
};

export { Form };
