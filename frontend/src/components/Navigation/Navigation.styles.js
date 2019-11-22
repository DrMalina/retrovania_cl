import styled from 'styled-components';

import { Link } from 'components/Link';

import { colors } from 'utils';

const { menu, text } = colors;

const Nav = styled.nav`
  align-items: center;
  background: ${menu.background.hex};
  box-shadow: 0 3px 50px ${menu.shadow.hex};
  display: flex;
  padding: 25px 70px;
  position: ${({ location }) =>
    location.pathname === '/' ? 'absolute' : 'static'};
  width: 100%;
  z-index: 1000;
`;

const NavItem = styled.li`
  list-style: none;

  &:not(:last-child) {
    margin-right: 80px;
  }
`;

const NavItemsWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-left: 80px;
`;

const NavLink = styled(Link)`
  color: ${text.primary.hex};
  text-transform: capitalize;
  white-space: nowrap;

  &:hover {
    color: ${text.tertiary.hex};
  }
`;

const NavList = styled.ul`
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const NavLogo = styled.img`
  height: 70px;
`;

const NavLogoWrapper = styled.div`
  flex: 0;

  & a {
    font-size: 0;
    margin: 0;
  }
`;

export {
  Nav,
  NavItem,
  NavItemsWrapper,
  NavLink,
  NavList,
  NavLogo,
  NavLogoWrapper
};
