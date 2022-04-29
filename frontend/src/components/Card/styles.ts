import styled from 'styled-components/native';

export const Container = styled.View`
  width:390px;
  height: 160px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 14px auto;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-size: 26px;
`;

