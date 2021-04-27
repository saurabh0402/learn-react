import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    min-height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    transition: background 0.5s, color 0.25s;
    font-family: ${(props) => props.theme.font};
  }

  button {
    color: background: ${(props) => props.theme.colors.background};
  }

  p {
    line-height: 1.4rem;
  }
`;

export default GlobalStyles;
