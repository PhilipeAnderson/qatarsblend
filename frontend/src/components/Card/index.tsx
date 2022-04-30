import React from 'react';
import GasolineSVG from '../../assets/gasoline.svg';
import RS5CoupePNG from '../../assets/cars/rs5coupe.png';

import { 
  Container, 
  ContentInfo, 
  Brand, 
  Name, 
  Daily, 
  Value,
  Type,
  ContentCar

} from './styles';

export const Card = () => {
  return (
    <Container>
      <ContentInfo>
        <Brand> AUDI </Brand>
        <Name> RS 5 Coupe </Name>
        <Daily> Daily </Daily>
        <Value> $:120.00</Value>
      </ContentInfo>
      <ContentCar source={{ uri: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png' }} />
      <Type>  
        <GasolineSVG />
      </Type>
      
    </Container>
  );
};