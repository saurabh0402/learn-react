import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from './themes/theme.json';
import GlobalStyles from './themes/global-style';
import Body from './components/body';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Body toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
