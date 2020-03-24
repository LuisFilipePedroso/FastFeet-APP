import React from 'react';

import { FlatList } from 'react-native';
import IDelivery from '../../interfaces/Delivery';

import { Header, Title, ButtonsWrapper, Button, Text } from './styles';

import Delivery from '../Delivery';

interface IProps {
  deliveries: IDelivery[];
}

const DeliveryList = ({ deliveries }: IProps) => {
  return (
    <>
      <Header>
        <Title>Entregas</Title>
        <ButtonsWrapper>
          <Button active>
            <Text active>Pendentes</Text>
          </Button>
          <Button>
            <Text>Entregues</Text>
          </Button>
        </ButtonsWrapper>
      </Header>
      <FlatList
        data={deliveries}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Delivery data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 5 }}
      />
    </>
  );
};

// Title should receive color and fontSize props
// Button should receive prop active
// DeliveyProcess should receive prop process

export default DeliveryList;
