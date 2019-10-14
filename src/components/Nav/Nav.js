import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: cadetblue;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ openNav }) => (openNav ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s;
  z-index: 1;
`;

const Nav = ({ openNav }) => {
  return <StyledNav openNav={openNav}>Hi</StyledNav>;
};

export default Nav;
