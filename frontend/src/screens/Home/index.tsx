import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Card } from '../../components/Card';

import { 
  Container, 
  Header, 
  UserData,
  UserPic,
  UserName,
  TotalCars, 
  HeaderContent 

} from './styles';

export const Home = () => {
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <UserData>
          <UserPic source={{ uri: 'https://avatars.githubusercontent.com/u/18056309?v=4'}} />
          <UserName>Hy, {'\n'}Philipe{'\n'}Anderson</UserName>
        </UserData>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total 12 Cars
          </TotalCars>
        </HeaderContent>
      </Header>

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

    </Container>
  );
};