import styled from 'styled-components/native';

import { KeyboardAvoidingView } from 'react-native';
import { Input as UnformInput } from '~/components/Form/';

import { colors } from '~/styles/global';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Content = styled(KeyboardAvoidingView).attrs({
  behavior: 'padding',
})`
  margin-top: -60px;
  margin-left: 20px;
  margin-right: 20px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0px 0px 3px #0000001a;
  border-radius: 4px;
  padding: 15px;
`;

export const Input = styled(UnformInput)`
  font-size: 16px;
  color: #999999;
`;

export const SubmitButtonWrapper = styled(Content)`
  background-color: transparent;
  margin-top: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
