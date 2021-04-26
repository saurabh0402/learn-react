import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from './themes/theme.json';
import GlobalStyles from './themes/global-style';
import Body from './components/body';

const App = () => {
  const [theme, setTheme] = useState('light');
  console.log(GlobalStyles);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Body setTheme={setTheme} />
    </ThemeProvider>
  );
};

export default App;
