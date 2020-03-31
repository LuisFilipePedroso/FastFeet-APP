import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '../../store/modules/auth/actions';

import IDelivery from '../../interfaces/Delivery';

import {
  Container,
  Header,
  Welcome,
  SmallText,
  Title,
  ExitButton,
} from './styles';

import Avatar from '../../components/Avatar';

import DeliveryList from '../../components/DeliveryList';

import api from '../../services/api';

const Dashboard: React.FC = () => {
  const { profile } = useSelector(state => state.user);
  const [deliveries, setDeliveries] = useState<IDelivery>([]);

  const dispatch = useDispatch();

  async function fetchDeliveries(status = 'pending') {
    const response = await api.get(
      `/deliveryman/${profile.id}/deliveries?status=${status}`
    );

    setDeliveries(response.data);
  }

  useEffect(() => {
    fetchDeliveries();
  }, []);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <Avatar
          baseProfile={profile}
          containerWidth="30%"
          imageContainerWidth="68px"
          borderRadius="34px"
        />
        <Welcome>
          <SmallText>Bem vindo de volta</SmallText>
          <Title>{profile.name}</Title>
        </Welcome>
        <ExitButton onPress={handleLogout}>
          <Icon name="exit-to-app" size={24} color="#E74040" />
        </ExitButton>
      </Header>
      <DeliveryList
        deliveries={deliveries}
        filterDeliveries={fetchDeliveries}
      />
    </Container>
  );
};

export default Dashboard;
