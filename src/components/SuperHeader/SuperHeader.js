import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS } from '../../constants';

import Icon from '../Icon';
import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput className="desktop-search" />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton className="desktop-cart">
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > * {
    display: none;
  }

  @media ${BREAKPOINTS.desktopAndAbove} {
    height: 40px;
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 0.875rem;
    color: var(--gray-300);
    background-color: var(--gray-900);
    height: 40px;
    padding-left: 32px;
    padding-right: 32px;

    & > * {
      display: initial;
    }
  }
`;

const MarketingMessage = styled.span`
  color: var(--white);
  margin-right: auto;
`;

const HelpLink = styled.a`
  display: none;

  @media ${BREAKPOINTS.desktopAndAbove} {
    color: inherit;
    text-decoration: none;
    outline-offset: 2px;

    &:not(:focus-visible) {
      outline: none;
    }
  }
`;

export default SuperHeader;
