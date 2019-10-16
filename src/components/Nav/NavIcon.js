import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.button`
  height: 44px;
  width: 50px;
  background-color: transparent;
  position: fixed;
  top: 5%;
  right: 5%;
  z-index: 2;
  padding: 0;
  margin: 0;
  border: none;
`;

const StyledNavIcon = styled.div`
  width: 50px;
  height: 7px;
  background-color: ${({ openNav }) => (openNav ? '#bf5858' : 'white')};
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  transition: background-color 0.5s;

  &::before {
    content: '';
    width: 50px;
    height: 7px;
    background-color: white;
    transform: translateY(15px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${({ openNav }) =>
      openNav
        ? 'translateY(-50%) translateX(-50%) rotate(45deg)'
        : 'translateY(calc(-50% - 15px)) translateX(-50%) rotate(0)'};
    transition: transform 0.5s;
  }

  &::after {
    content: '';
    width: 50px;
    height: 7px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${({ openNav }) =>
      openNav
        ? 'translateY(-50%) translateX(-50%) rotate(-45deg)'
        : 'translateY(calc(-50% + 15px)) translateX(-50%) rotate(0)'};
    transition: transform 0.5s;
  }
`;

const NavIcon = ({ openNav, setNav }) => (
  <StyledWrapper onClick={() => setNav(!openNav)} openNav={openNav}>
    <StyledNavIcon openNav={openNav} />
    {/* <StyledNavIcon /> */}
  </StyledWrapper>
);

export default NavIcon;
