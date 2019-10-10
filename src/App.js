import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';

import H1 from './components/H1/H1';

const StyledWrapper = styled.main`
  background-color: red;
`;

const App = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <H1>Hello</H1>
    </StyledWrapper>
  </>
);

export default App;
