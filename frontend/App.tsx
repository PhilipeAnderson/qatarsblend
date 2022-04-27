import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

// import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
// import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo';

import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';

export default function App() { 
  return(
    <ThemeProvider theme={ theme } >
      <Home />
    </ThemeProvider>
  );
}