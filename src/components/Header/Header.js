import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, WEIGHTS } from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import SuperHeader from '../SuperHeader';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
        </DesktopNav>
        <Side className='desktop'>
          <Icon id="shopping-bag" />
          <Icon id="search" />
          <Icon id="menu" onClick={() => setShowMobileMenu(true)} />
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--gray-300);

  @media ${BREAKPOINTS.desktopAndBelow} {
    justify-content: space-between;
  }
`;

const DesktopNav = styled.nav`
  @media ${BREAKPOINTS.desktopAndBelow} {
    display: none;
    flex: 1;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${BREAKPOINTS.desktopAndBelow} {
    display: grid;
    position: absolute;
    right: -100%;
    top: 0;
    height: 100vh;
  }
`;

const Side = styled.div`
  display: flex;
  gap: 32px;

  & > * {
    cursor: pointer;
  }

  @media ${BREAKPOINTS.desktopAndAbove} {
    flex: 1;

    &.desktop > * {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--secondary);
  }
`;

export default Header;
