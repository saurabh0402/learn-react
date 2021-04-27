import React from 'react';

import Header from './header';
import Container from './container';

const Body = ({ toggleTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <Container />
    </>
  );
};

export default Body;
