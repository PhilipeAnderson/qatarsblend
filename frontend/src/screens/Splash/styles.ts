import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundSpecial};
`;

export const LogoSplashQatar = styled.View`
  margin-top: -200px;
  margin-bottom: 50px;
`;

export const TextSplash = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(42)}px;
  text-align: center;
  margin-bottom: -150px;
`;

