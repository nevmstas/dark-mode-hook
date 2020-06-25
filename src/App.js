import React from 'react';
import './App.css';
import {GlobalStyles} from './styles/global'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './styles/theme'
import { useState } from 'react';



function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme==='light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle theme</button>
        <h1>It's the light theme!</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
