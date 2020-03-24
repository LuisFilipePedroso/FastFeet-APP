import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 80px 20px 25px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Profile = styled.View`
  width: 30%;
`;

export const DefaultImage = styled.View`
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  border-radius: 34px;
  background-color: #f4effc;
`;

export const DefaultImageText = styled.Text`
  font-size: 31px;
  color: #a28fd0;
`;

export const Image = styled.Image``;

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

export const Exit = styled.View`
  justify-content: center;
  align-items: center;
  width: 20%;
`;
