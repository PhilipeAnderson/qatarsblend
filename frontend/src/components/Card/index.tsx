import React from 'react';

import { 
  Container, 
  ContentInfo, 
  Brand, 
  Name, 
  Daily, 
  Value,
  ContentCar

} from './styles';

export const Card = () => {
  return (
    <Container>
      <ContentInfo>
        <Brand> Audi </Brand>
        <Name> RS 5 Coupe </Name>
        <Daily> Per Day </Daily>
        <Value> U$: 120.00</Value>
      </ContentInfo>
      <ContentCar />
    </Container>
  );
};