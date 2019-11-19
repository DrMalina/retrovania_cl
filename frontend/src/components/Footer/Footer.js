import React from 'react';

import * as S from './Footer.styles';

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterParagraph>
        {`© ${new Date().getFullYear()} `}
        <S.FooterLink
          href='https://github.com/przemwierzbicki/retrovania'
          isInternal={false}
          rel='noopener noreferrer'
          target='_blank'
        >
          Retrovania
        </S.FooterLink>
      </S.FooterParagraph>
    </S.Footer>
  );
};

export { Footer };
