import React from 'react';

import { ThemeProvider } from 'styled-components';
//import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo';

import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { Theme } from './src/styles/theme';

export default function App() {
  // const [ fontsLoaded ] = useFonts({
  //   Inter_400Regular, 
  //   Inter_500Medium,
  //   Archivo_400Regular, 
  //   Archivo_500Medium, 
  //   Archivo_600SemiBold
  // });
 
  return (
    <ThemeProvider theme={Theme} >
      <Login />
      {/* <Home /> */}
    </ThemeProvider>
  );
}