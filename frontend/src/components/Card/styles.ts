import styled from 'styled-components/native';

export const Container = styled.View`
  width:390px;
  height: 120px;
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
  height: 100px;
`;

export const Brand = styled.Text`
  color: ${({ theme }) => theme.colors.textDetail};
  font-size: 18px;

  text-transform: uppercase;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 22px;
`;

export const Daily = styled.Text`
  color: ${({ theme }) => theme.colors.textDetail};
  font-size: 14px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-size: 20px;
`;

export const Type = styled.View`
  position: absolute;
  margin-bottom: 30%;
  margin-left: 130px;
`;

export const ContentCar = styled.Image`
  width: 200px;
  height: 100px;
`;

