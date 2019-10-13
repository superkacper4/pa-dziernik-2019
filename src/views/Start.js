import React from 'react';
import styled from 'styled-components';

import Arrow from '../components/Arrow/Arrow';
import H1 from '../components/H1/H1';
import H2 from '../components/H2/H2';

const StyledWrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top left, #e66465, #9198e5);
  background-size: 5000px 5000px;
  position: relative;
  animation: start 10s ease-in-out infinite alternate;

  @keyframes start {
    0% {
      background-position: 0% 0%;
    }

    100% {
      background-position: 100% 100%;
    }
  }
`;

const Start = () => (
  <>
    <StyledWrapper>
      <H1>Hello</H1>
      <H2>nice to see u!</H2>
      <Arrow />
    </StyledWrapper>
  </>
);

export default Start;
