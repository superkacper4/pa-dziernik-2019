import React, { useState } from 'react';
import GlobalStyle from '../theme/GlobalStyle';

import Nav from '../components/Nav/Nav';
import NavIcon from '../components/Nav/NavIcon';
import Start from './Start';
import About from './About';

const Root = () => {
  const [openNav, setNav] = useState(false);

  return (
    <>
      <NavIcon openNav={openNav} setNav={setNav} />
      <Nav openNav={openNav} />
      <GlobalStyle />
      <Start />
      <About />
    </>
  );
};

export default Root;
