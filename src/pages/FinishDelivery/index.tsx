import React, { useRef } from 'react';
import { StatusBar } from 'react-native';
import { RNCamera } from 'react-native-camera';

import { useRoute, useNavigation } from '@react-navigation/native';

import { colors } from '~/styles/global';

import IDelivery from '~/interfaces/Delivery';
import IDeliveryProblem from '~/interfaces/DeliveryProblem';

import Header from '~/components/Header';

import { Container, Content, Camera } from './styles';

import api from '~/services/api';

const FinishDelivery = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const cameraRef = useRef();

  const { delivery }: { delivery: IDelivery } = route.params;

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Header />
      <Content>
        <Camera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          // flashMode={RNCamera.Constants.FlashMode.on}
        />
      </Content>
    </Container>
  );
};

export default FinishDelivery;
