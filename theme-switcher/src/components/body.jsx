import React from 'react';
import styled from 'styled-components';

const Body = ({ setTheme }) => {
  return (
    <>
      <button onClick={() => setTheme('dark')}> Dark Mode </button>
      <button onClick={() => setTheme('light')}> Light Mode </button>
      <h1> Hello World </h1>
    </>
  );
};

export default Body;
