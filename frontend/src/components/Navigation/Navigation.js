import React from 'react';
import { withRouter } from 'react-router-dom';

import * as S from './Navigation.styles';

import logo from 'assets/images/logo.png';

const Navigation = ({ currentUser, deauthenticate, location }) => {
  console.log(currentUser);
  return (
    <S.Nav location={location}>
      <S.NavList>
        <S.NavLogoWrapper>
          <S.NavItem>
            <S.NavLink to='/' title='Go to home page'>
              <S.NavLogo src={logo} alt='Retrovania logo' />
            </S.NavLink>
          </S.NavItem>
        </S.NavLogoWrapper>
        <S.NavItemsWrapper>
          <S.NavItem>
            <S.NavLink to='/games'>Browse games</S.NavLink>
          </S.NavItem>
          {
            currentUser ? (
              <S.NavItem>
                <S.NavLink to='#' onClick={() => deauthenticate()}>Sign out</S.NavLink>
              </S.NavItem>
            ) : (
              <>
                <S.NavItem>
                  <S.NavLink to='/signin'>Sign in</S.NavLink>
                </S.NavItem>
                <S.NavItem>
                  <S.NavLink to='/signup'>Sign up</S.NavLink>
                </S.NavItem>
              </>
            )
          }
        </S.NavItemsWrapper>
      </S.NavList>
    </S.Nav>
  );
};

const NavigationWithRouter = withRouter(Navigation);

export { NavigationWithRouter as Navigation };
