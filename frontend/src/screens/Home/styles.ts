import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme}) => theme.colors.backgroundSpecial};
`;

export const Header = styled.View`
  width: 100%;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.main};
  justify-content: flex-end;
  padding: 32px 24px;
`;

export const UserData = styled.View`
  width: 33%;
  height: 100px;
  background-color: yellow;
`;

export const UserPic = styled.Image`

`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 22px;
`;


export const HeaderContent = styled.View`
  align-items: flex-end;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  margin-top: 25px;
  color: ${({ theme }) =>  theme.colors.shape}
`;
