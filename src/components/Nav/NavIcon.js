import React from 'react';
import styled from 'styled-components';

const StyledNavIcon = styled.button`
  height: 7px;
  width: 50px;
  background-color: ${({ openNav }) => (openNav ? 'red' : 'white')};
  position: fixed;
  top: 5%;
  right: 5%;
  transition: 0.5s;
  z-index: 2;
  border: none;

  &::before {
    content: '';
    height: 7px;
    width: 50px;
    background-color: white;
    position: fixed;
    top: 5%;
    right: 5%;
    transition: 0.5s;
    z-index: 2;
    transform: ${({ openNav }) =>
      openNav ? 'rotate(45deg) translateY(0)' : 'rotate(0) translateY(15px)'};
  }

  &::after {
    content: '';
    height: 7px;
    width: 50px;
    background-color: white;
    position: fixed;
    top: 5%;
    right: 5%;
    transition: 0.5s;
    z-index: 2;
    transform: ${({ openNav }) =>
      openNav ? 'rotate(-45deg) translateY(0)' : 'rotate(0) translateY(-15px)'};
  }
`;

const NavIcon = ({ openNav, setNav }) => (
  <StyledNavIcon onClick={() => setNav(!openNav)} openNav={openNav} />
);

export default NavIcon;
