import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: cadetblue;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  transform: ${({ openNav }) => (openNav ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavList = styled.ul`
  list-style-type: none;
  font-size: 5rem;
  margin: 0;
  padding: 0;
`;

const StyledNavItem = styled.li`
  margin: 0;
  padding: 0;
`;

const Nav = ({ openNav, setNav }) => {
  const scroll = v => {
    window.scrollTo(0, v * window.innerHeight);
    setNav(!openNav);
  };
  return (
    <StyledNav openNav={openNav}>
      <StyledNavList>
        <StyledNavItem onClick={() => scroll(2)}>About</StyledNavItem>
        <StyledNavItem>test</StyledNavItem>
        <StyledNavItem>test</StyledNavItem>
      </StyledNavList>
    </StyledNav>
  );
};

export default Nav;
