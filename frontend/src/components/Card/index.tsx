import React from 'react';

import GasolineSVG from '../../assets/gasoline.svg';
import ForceSVG from '../../assets/force.svg';
import PeopleSVG from '../../assets/people.svg';


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
        <ForceSVG />
        <PeopleSVG />
      </Type>
    </Container>
  );
};