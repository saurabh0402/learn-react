import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    min-height: 100vh;
    width: 100vw;
    padding: 1rem;
    box-sizing: border-box;
    transition: background 0.5s, color 0.25s;
    font-family: ${(props) => props.theme.font};
  }

  button {
    color: background: ${(props) => props.theme.colors.background};
  }
`;

export default GlobalStyles;
