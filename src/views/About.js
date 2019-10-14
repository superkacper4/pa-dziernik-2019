import React from 'react';
import styled from 'styled-components';

import H2 from '../components/H2/H2';

const StyledWrapper = styled.div`
  background-color: #00729c;
  color: white;
  height: 100vh;
  padding: 10px;
`;

const About = () => (
  <StyledWrapper>
    <H2>About</H2>
  </StyledWrapper>
);

export default About;
