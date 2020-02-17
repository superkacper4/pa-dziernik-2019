import React from 'react';
import styled from 'styled-components';

import H2 from '../components/H2/H2';
import Slider from '../components/Slider/Slider';

const StyledWrapper = styled.div`
  background-color: #00729c;
  color: white;
  height: 100vh;
  padding: 10px;
`;

const About = () => (
  <StyledWrapper>
    <H2>About</H2>
    <Slider />
  </StyledWrapper>
);

export default About;
