import React from 'react';
import './App.css';
import {GlobalStyles} from './styles/global'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './styles/theme'
import { useState } from 'react';
import Toggle from './Components/Toggle'
import { useDarkMode } from './hooks/useDarkMode';


function App() {
  const [theme, toggleTheme] = useDarkMode()

  const themeMode = theme === 'light'? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
