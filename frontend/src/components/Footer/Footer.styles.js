import styled from 'styled-components';

import { Link } from 'components/Link';

import { colors, typography } from 'utils';

const { menu } = colors;
const { sizes } = typography;

const Footer = styled.footer`
  align-items: center;
  font-size: ${sizes.tiny};
  margin-top: 30px;
  padding: 25px 70px;
  position: relative;
  text-align: center;

  &::before {
    background-color: ${menu.shadow.hex};
    box-shadow: 0 0 10px 2px ${menu.shadow.hex};
    content: '';
    height: 3px;
    position: absolute;
    top: -3px;
    transform: translate(-50%, -50%);
    width: 90%;
  }
`;

const FooterLink = styled(Link)`
  font-size: inherit;
`;

const FooterParagraph = styled.p`
  margin: 0;
`;

export { Footer, FooterLink, FooterParagraph };
