import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme}) => theme.colors.backgroundSpecial};
`;

export const Header = styled.View`
  width: 100%;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.header};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 32px 24px;
`;

export const UserData = styled.View`
  width: 40%;
  height: 80px;
  
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const UserPic = styled.Image`
  width: 80px;
  height: 80px;
  margin-top: 16px;
  border-radius: 10px;

`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 20px;
  margin-top: 16px;
  margin-left: 5px;
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
