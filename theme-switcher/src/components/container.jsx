import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  padding: 0.5rem 1rem;
`;

const CodeCont = styled.span`
  font-style: italic;
  font-family: ${(props) => props.theme.code.fontFamily};
`;

const Code = ({ children }) => {
  return <CodeCont>{children}</CodeCont>;
};

const Container = () => {
  return (
    <Cont>
      <h1> Hello People! </h1>
      <p>
        This is a very simple theme switcher that uses{' '}
        <Code>styled-components</Code> for theming. It's actually pretty
        straight-forward and easy. <Code>styled-components</Code> provide us a
        component called <Code>ThemeProvider</Code> to which we pass a theme
        object and that is then passed on to <Code>styled</Code> "functions" as
        props and we can use the values in theme for styling. But one main
        ascpect is the default styles which is achieved using{' '}
        <Code>createGlobalStyle</Code> function that{' '}
        <Code>styled-component</Code>.
      </p>
    </Cont>
  );
};

export default Container;
