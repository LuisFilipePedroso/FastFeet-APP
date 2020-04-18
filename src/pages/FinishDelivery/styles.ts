import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

import { colors } from '~/styles/global';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Content = styled.View`
  margin-top: -60px;
  margin-left: 20px;
  margin-right: 20px;
  height: 445px;
  background-color: #fff;
  box-shadow: 0px 0px 3px #0000001a;
  border-radius: 4px;
`;

export const Camera = styled(RNCamera)`
  width: 100%;
  height: 100%;
`;

export const SubmitButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  margin-top: 456px;
  background-color: ${colors.primary};
`;

export const SubmitButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
