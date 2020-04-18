import React, { useRef } from 'react';
import { StatusBar, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';

import { useRoute, useNavigation } from '@react-navigation/native';

import { colors } from '~/styles/global';

import IDelivery from '~/interfaces/Delivery';
import IDeliveryProblem from '~/interfaces/DeliveryProblem';

import Header from '~/components/Header';

import {
  Container,
  Content,
  Camera,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import api from '~/services/api';

const FinishDelivery = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const cameraRef = useRef();

  const { delivery }: { delivery: IDelivery } = route.params;

  async function handleTakePicture(camera: any) {
    const options = { quality: 0.5 };
    const data = await camera.takePictureAsync(options);

    const formData = new FormData();

    const [_, ext] = data.uri.split('.');

    formData.append('file', {
      uri: data.uri,
      type: `image/${ext}`,
      name: `File.${ext}`,
    });

    try {
      const response = await api.post('/files', formData);

      await api.put(`delivery/${delivery.id}/finish`, {
        signature_id: (response as any).data.id,
      });

      Alert.alert('Sucesso!', 'Encomenda finalizada com sucesso');

      navigation.navigate('Entregas', { refresh: true });
    } catch (e) {
      Alert.alert('Ops!', 'Algo de errado aconteceu, tente novamente!');
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Header />
      <Content>
        <Camera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          recordAudioPermissionStatus={
            RNCamera.Constants.RecordAudioPermissionStatus.AUTHORIZED
          }
        >
          {({ camera, status, recordAudioPermissionStatus }) => (
            <>
              <SubmitButton onPress={() => handleTakePicture(camera)}>
                <SubmitButtonText>Enviar</SubmitButtonText>
              </SubmitButton>
            </>
          )}
        </Camera>
      </Content>
    </Container>
  );
};

export default FinishDelivery;
