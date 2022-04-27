import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme}) => theme.colors.backgroundPrimary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const TotalCars = styled.Text`
  color: ${({ theme }) =>  theme.colors.shape}
`;
