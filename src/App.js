import React from 'react';
import './App.css';
import {GlobalStyles} from './styles/global'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './styles/theme'
import { useState } from 'react';
import Toggle from './Components/Toggle'


function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme==='light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
