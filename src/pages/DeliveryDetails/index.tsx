import React, { useState, useMemo, useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '~/services/api';
import IDelivery from '~/interfaces/Delivery';
import DeliveryStatus from '~/utils/DeliveryStatus';
import { formatDate } from '~/utils/FormatDate';

import {
  Container,
  Card,
  TitleWrapper,
  Title,
  DescriptionWrapper,
  TitleDescription,
  InfoText,
  DatesWrapper,
  InfoDateWrapper,
  ButtonWrapper,
  Button,
  ButtonText,
} from './styles';

import Header from '~/components/Header';

import { colors } from '~/styles/global';

const IStatus = {
  PENDING: 'Pendente',
  TAKE: 'Retirado',
  DONE: 'Entregue',
};

const DeliveryDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [delivery, setDelivery] = useState<IDelivery>({});
  const [status, setStatus] = useState<string | null>('');

  const { deliveryId } = route.params;

  async function getDelivery() {
    const response = await api.get(`/delivery/${deliveryId}`);
    const data = {
      ...response.data,
      formattedStartDate: response.data.start_date
        ? formatDate(response.data.start_date)
        : '--/--/--',
      formattedEndDate: response.data.end_date
        ? formatDate(response.data.end_date)
        : '--/--/--',
    };

    setDelivery(data);

    const formattedStatus = DeliveryStatus({
      startDate: response.data?.start_date,
      endDate: response.data?.end_date,
    });

    const defaultStatus = formattedStatus && IStatus[formattedStatus];

    setStatus(defaultStatus);
  }

  useEffect(() => {
    getDelivery();
  }, []);

  async function initializeDelivery() {
    try {
      await api.put(`delivery/${delivery.id}/start`);
      Alert.alert('Sucesso!', 'Entrega iniciada com sucesso, boa viagem!');
      await getDelivery();
    } catch (e) {
      Alert.alert('Ops', 'Algo de errado aconteceu, tente novamente!');
    }
  }

  const buttons = [
    {
      id: 0,
      title: 'Informar\nProblema',
      icon: <Icon name="highlight-off" size={24} color={colors.danger} />,
      borderRight: true,
      path: 'Informar Problema',
      shouldRedirect: true,
      fn: null,
    },
    {
      id: 1,
      title: 'Visualizar\nProblema',
      icon: <Icon name="info-outline" size={24} color={colors.attention} />,
      borderRight: true,
      path: 'Visualizar Problemas',
      shouldRedirect: true,
      fn: null,
    },
    {
      id: 2,
      title:
        delivery?.start_date === null
          ? 'Iniciar\nEntrega'
          : 'Confirmar\nEntrega',
      icon:
        delivery?.start_date === null ? (
          <Icon name="local-shipping" size={24} color={colors.primary} />
        ) : (
          <CommunityIcon
            name="check-circle-outline"
            size={24}
            color={colors.primary}
          />
        ),
      borderRight: true,
      path: delivery?.start_date !== null && 'Confirmar Entrega',
      shouldRedirect: delivery?.start_date !== null,
      fn: () => initializeDelivery(),
    },
  ];

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Header />

      <Card height={207} marginTop={-60}>
        <TitleWrapper>
          <Icon name="local-shipping" size={24} color="#7D40E7" />
          <Title>Informações da entrega</Title>
        </TitleWrapper>
        <DescriptionWrapper>
          <TitleDescription>Destinatário</TitleDescription>
          <InfoText>{delivery.recipient?.name}</InfoText>
          <TitleDescription>Endereço de entrega</TitleDescription>
          <InfoText>
            {delivery.recipient?.street}, {delivery.recipient?.number},{' '}
            {delivery.recipient?.city} - {delivery.recipient?.state},{' '}
            {delivery.recipient?.postal_code}
          </InfoText>
          <TitleDescription>Produto</TitleDescription>
          <InfoText>{delivery.product}</InfoText>
        </DescriptionWrapper>
      </Card>

      <Card height={159} marginTop={10}>
        <TitleWrapper>
          <Icon name="event" size={24} color="#7D40E7" />
          <Title>Situação da entrega</Title>
        </TitleWrapper>
        <DescriptionWrapper>
          <TitleDescription>Status</TitleDescription>
          <InfoText>{status}</InfoText>

          <DatesWrapper>
            <InfoDateWrapper>
              <TitleDescription>Data de retirada</TitleDescription>
              <InfoText>{delivery.formattedStartDate}</InfoText>
            </InfoDateWrapper>
            <InfoDateWrapper>
              <TitleDescription>Data de entrega</TitleDescription>
              <InfoText>{delivery.formattedEndDate}</InfoText>
            </InfoDateWrapper>
          </DatesWrapper>
        </DescriptionWrapper>
      </Card>

      <Card height={83} marginTop={11} backgroundColor="#F8F9FD" row noPadding>
        {buttons.map(button => (
          <ButtonWrapper key={button.id} borderRight={button.borderRight}>
            <Button
              onPress={() =>
                button.shouldRedirect === true
                  ? navigation.navigate(button.path, { delivery })
                  : button.fn()
              }
            >
              {button.icon}
              <ButtonText>{button.title}</ButtonText>
            </Button>
          </ButtonWrapper>
        ))}
      </Card>
    </Container>
  );
};

export default DeliveryDetails;
