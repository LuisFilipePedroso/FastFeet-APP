import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IDelivery from '../../interfaces/Delivery';

import {
  Container,
  Header,
  Profile,
  Image,
  DefaultImage,
  DefaultImageText,
  Welcome,
  SmallText,
  Title,
  Exit,
} from './styles';
import DeliveryList from '../../components/DeliveryList';

import api from '../../services/api';

const Dashboard: React.FC = () => {
  const { profile: stateProfile } = useSelector(state => state.user);
  const [deliveries, setDeliveries] = useState<IDelivery>([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    async function fetchDeliveries() {
      const response = await api.get(
        `/deliveryman/${profile.id}/deliveries?status=${status}`
      );

      setDeliveries(response.data);
    }
    fetchDeliveries();
  }, []);

  const profile = useMemo(() => {
    const acronymName = stateProfile?.name
      .split(/\s/)
      .reduce((response, word) => (response += word.slice(0, 1)), '');

    return {
      ...stateProfile,
      acronymName: acronymName.replace(/[^A-Z]/g, ''),
    };
  }, []);

  return (
    <Container>
      <Header>
        <Profile>
          {profile?.image?.url ? (
            <Image source={profile.avatar.url} />
          ) : (
            <DefaultImage>
              <DefaultImageText>{profile.acronymName}</DefaultImageText>
            </DefaultImage>
          )}
        </Profile>
        <Welcome>
          <SmallText>Bem vindo de volta</SmallText>
          <Title>{profile.name}</Title>
        </Welcome>
        <Exit>
          <Icon name="exit-to-app" size={24} color="#E74040" />
        </Exit>
      </Header>
      <DeliveryList deliveries={deliveries} />
    </Container>
  );
};

export default Dashboard;
