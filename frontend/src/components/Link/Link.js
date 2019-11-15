import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import * as S from './Link.styles';

const Link = ({ children, isInternal = true, ...rest }) => {
  const renderAs = isInternal ? RouterLink : 'a';

  return (
    <S.Link as={renderAs} {...rest}>
      {children}
    </S.Link>
  );
};

export { Link };
