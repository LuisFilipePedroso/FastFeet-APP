import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

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
  /* align-items: center; */
`;
