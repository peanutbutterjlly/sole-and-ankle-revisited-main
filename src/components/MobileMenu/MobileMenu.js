/* eslint-disable no-unused-vars */
import { DialogContent, DialogOverlay } from '@reach/dialog';
import React from 'react';
import styled from 'styled-components/macro';

import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <UnstyledButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={1} />
        </UnstyledButton>
        <nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </nav>
        <footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </footer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: ${COLORS.white};
  padding: 32px;
  width: 300px;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  button {
    align-self: flex-end;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-grow: 1;
    justify-content: center;

    a {
      color: ${COLORS.gray[900]};
      font-size: ${18 / 16}rem;
      text-decoration: none;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: 16px;

    a {
      font-size: ${14 / 16}rem;
      text-decoration: none;
      color: ${COLORS.gray[700]};
    }
  }
`;

export default MobileMenu;
