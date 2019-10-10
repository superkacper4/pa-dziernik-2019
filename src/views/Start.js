import React from 'react';
import styled from 'styled-components';

import H1 from '../components/H1/H1';
import H2 from '../components/H2/H2';

const StyledWrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #43424f;
`;

const Start = () => (
  <>
    <StyledWrapper>
      <H1>Hello</H1>
      <H2>nice to see u!</H2>
    </StyledWrapper>
  </>
);

export default Start;
