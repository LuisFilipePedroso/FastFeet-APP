import React, { useRef } from 'react';
import * as Yup from 'yup';

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

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        id: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(signInRequest(data.id));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
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
