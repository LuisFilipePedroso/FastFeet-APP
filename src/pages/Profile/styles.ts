import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const AvatarWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 68px;
  margin-bottom: 41px;
  height: 183px;
`;

export const AvatarInfo = styled.View`
  padding: 0 36px;
`;

export const TextSm = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const TextLg = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background-color: #e74040;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const LogoutButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
