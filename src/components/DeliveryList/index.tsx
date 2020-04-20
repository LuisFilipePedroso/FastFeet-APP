import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native';
import IDelivery from '../../interfaces/Delivery';

import { Header, Title, ButtonsWrapper, Button, Text } from './styles';

import Delivery from '../Delivery';

const INITIAL_LABELS = [
  {
    id: Math.random() * 10,
    title: `Aguardando\nRetirada`,
    label: 'PENDING',
    lineWidth: 111,
    active: true,
  },
  {
    id: Math.random() * 10,
    title: 'Retirada',
    label: 'TAKE',
    lineWidth: 121,
    active: false,
  },
  {
    id: Math.random() * 10,
    title: 'Entregue',
    label: 'DONE',
    lineWidth: 0,
    active: false,
  },
];

interface IProps {
  deliveries: IDelivery[];
  filterDeliveries: (filter: string) => void;
  refresh: boolean | undefined;
}

const DeliveryList = ({ deliveries, filterDeliveries, refresh }: IProps) => {
  const [active, setActive] = useState('pending');
  const [labels, setLabels] = useState(INITIAL_LABELS);

  useEffect(() => {
    setLabels(INITIAL_LABELS);
  }, [active]);

  function handleFilter(filter: string) {
    setActive(filter);
    return filterDeliveries(filter);
  }

  console.log(refresh);

  return (
    <>
      <Header>
        <Title>Entregas</Title>
        <ButtonsWrapper>
          <Button isActive={active === 'pending'}>
            <Text
              isActive={active === 'pending'}
              onPress={() => handleFilter('pending')}
            >
              Pendentes
            </Text>
          </Button>
          <Button isActive={active === 'done'}>
            <Text
              isActive={active === 'done'}
              onPress={() => handleFilter('done')}
            >
              Entregues
            </Text>
          </Button>
        </ButtonsWrapper>
      </Header>
      <FlatList
        data={deliveries}
        keyExtractor={item => String(item.id)}
        extraData={refresh === true}
        renderItem={({ item }) => (
          <Delivery data={item} labels={labels} setLabels={setLabels} />
        )}
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
