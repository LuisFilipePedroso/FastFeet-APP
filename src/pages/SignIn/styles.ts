import styled from 'styled-components/native';

import Input from '../../components/Form/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #7d40e7;
`;

export const ImageWrapper = styled.View`
  padding: 15px;
  margin-bottom: 38px;
`;

export const Image = styled.Image`
  height: 44px;
`;

export const TextInput = styled(Input)`
  width: 325px;
  height: 45px;
  border: 1px solid #dddddd;
  color: #999999;
  background-color: #ffffff;
  padding: 0 15px;
  font-size: 16px;
  border-radius: 4px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 325px;
  height: 45px;
  background-color: #82bf18;
  border-radius: 4px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;
