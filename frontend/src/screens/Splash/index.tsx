import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import LogoSplash from '../../assets/qatar/logoQatarWorldCup.svg';

import { Container, LogoSplashQatar, TextSplash } from './styles';

export const Splash = () => {
  return (
    <Container>
      <LogoSplashQatar>
        <LogoSplash 
          width={RFValue(200)}
        />
      </LogoSplashQatar>
      <TextSplash>
        Your Luxury Car {'\n'}IN Qatar'S {'\n'}World Cup
      </TextSplash>
    </Container>
  );
};