import styled from 'styled-components/native';

export const Container = styled.View`
  width:390px;
  height: 160px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 14px auto;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const ContentInfo = styled.View`
  width: 150px;
  height: 150px;
  background-color: red;
`;

export const Brand = styled.Text`
  color: #FFFFFF;
  font-size: 26px;
`;

export const Name = styled.Text`
  color: #FFFFFF;
  font-size: 26px;
`;

export const Daily = styled.Text`
  color: #FFFFFF;
  font-size: 26px;
`;

export const Value = styled.Text`
  color: #FFFFFF;
  font-size: 26px;
`;

export const ContentCar = styled.View`
  width: 200px;
  height: 150px;
  background-color: purple;
`;

