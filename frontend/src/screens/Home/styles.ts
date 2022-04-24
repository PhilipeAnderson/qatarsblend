import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(26)}px;
  font-family: ${({ theme }) => theme.fonts.ArchivoSemiBold};
`;