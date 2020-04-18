import React, {
  useMemo,
  memo,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import IDelivery from '../../interfaces/Delivery';
import ILabels from '../../interfaces/Labels';

import { formatDate } from '../../utils/FormatDate';
import Status from '../../utils/DeliveryStatus';

import Progress from '../Progress';

import {
  Container,
  TitleWrapper,
  Title,
  DeliveryDetail,
  Button,
  DetailColumn,
  Text,
} from './styles';

interface IProps {
  data: IDelivery;
  labels: ILabels[];
  setLabels: Dispatch<SetStateAction>;
}

const Delivery = ({ data, labels, setLabels, ...other }: IProps) => {
  const formattedDate = useMemo(() => formatDate(data.createdAt), []);
  const navigation = useNavigation();

  const status = useMemo(
    () =>
      Status({
        startDate: data?.start_date,
        endDate: data?.end_date,
      }),
    []
  );

  useEffect(() => {
    const newLabels = labels.map(label => {
      if (status === 'DONE') {
        return {
          ...label,
          active: true,
        };
      }

      if (label.label === status) {
        return {
          ...label,
          active: true,
        };
      }

      return label;
    });

    setLabels(newLabels);
  }, []);

  return (
    <Container>
      <TitleWrapper>
        <Icon name="local-shipping" size={24} color="#7D40E7" />
        <Title fontSize={14} color="#7D40E7">
          Encomenda {data.id}
        </Title>
      </TitleWrapper>
      <Progress labels={labels} />
      <DeliveryDetail>
        <DetailColumn>
          <Text fontSize={12} color="#999999">
            Data
          </Text>
          <Text fontSize={14} color="#444444" bold>
            {formattedDate}
          </Text>
        </DetailColumn>
        <DetailColumn>
          <Text fontSize={12} color="#999999">
            Cidade
          </Text>
          <Text fontSize={14} color="#444444" bold>
            {data.recipient?.city}
          </Text>
        </DetailColumn>
        <Button
          onPress={() =>
            navigation.navigate('Detalhes', { deliveryId: data.id })
          }
        >
          <Text fontSize={14} color="#7D40E7" bold>
            Ver detalhes
          </Text>
        </Button>
      </DeliveryDetail>
    </Container>
  );
};

export default memo(Delivery);
