import React, { useRef } from 'react';
import { StatusBar, Alert } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import IDelivery from '~/interfaces/Delivery';

import {
  Container,
  Content,
  Input,
  SubmitButtonWrapper,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import Header from '~/components/Header';

import { colors } from '~/styles/global';

import api from '~/services/api';

const DeliveryProblemForm = () => {
  const formRef = useRef(null);

  const route = useRoute();
  const navigation = useNavigation();

  const { delivery }: { delivery: IDelivery } = route.params;

  async function handleSubmit(data) {
    try {
      await api.post(`/delivery/${delivery.id}/problems`, data);
      Alert.alert('Sucesso', 'Problema relatado com sucesso!');
      navigation.navigate('Detalhes', delivery);
    } catch (e) {
      Alert.alert('Ops', 'Algo de errado aconteceu, tente novamente!');
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Header />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="description"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            placeholderTextColor="#999999"
          />
        </Form>
      </Content>
      <SubmitButtonWrapper>
        <SubmitButton onPress={() => formRef.current.submitForm()}>
          <SubmitButtonText>Enviar</SubmitButtonText>
        </SubmitButton>
      </SubmitButtonWrapper>
    </Container>
  );
};

export default DeliveryProblemForm;
