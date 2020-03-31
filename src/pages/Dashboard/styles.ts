import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 80px 20px 25px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Welcome = styled.View`
  width: 50%;
`;

export const SmallText = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const ExitButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 20%;
`;
