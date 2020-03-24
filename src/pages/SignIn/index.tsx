import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';

import { KeyboardAvoidingView } from 'react-native';
import { Form } from '@unform/mobile';
import { signInRequest } from '../../store/modules/auth/actions';

import {
  Container,
  ImageWrapper,
  Image,
  TextInput,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import Logo from '../../assets/images/logo-white.png';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  function handleSubmit(data) {
    dispatch(signInRequest(data.id));
  }

  return (
    <Container>
      <KeyboardAvoidingView behavior="padding">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <ImageWrapper>
            <Image source={Logo} />
          </ImageWrapper>
          <TextInput
            name="id"
            placeholder="Informe seu ID de cadastro"
            placeholderTextColor="#999999"
          />
          <SubmitButton onPress={() => formRef.current.submitForm()}>
            <SubmitButtonText>Entrar no sistema</SubmitButtonText>
          </SubmitButton>
        </Form>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
