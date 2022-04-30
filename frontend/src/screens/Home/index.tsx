import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Card } from '../../components/Card';

import { Text } from 'react-native'

import { 
  Container, 
  Header, 
  UserData,
  UserPic,
  UserName,
  ExtraInfo, 
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
          <UserName>Hy, {'\n'}Philipe</UserName>
        </UserData>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <ExtraInfo>
            Cars next you <Text style={{ color: '#00FF07'}}>12</Text>
          </ExtraInfo>
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