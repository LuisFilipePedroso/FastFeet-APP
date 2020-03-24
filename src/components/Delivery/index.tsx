import React, { useMemo } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IDelivery from '../../interfaces/Delivery';

import { formatDate } from '../../utils/FormatDate';
import Status from '../../utils/DeliveryStatus';

import { Progress, Step } from '../Progress';

import {
  Container,
  TitleWrapper,
  Title,
  DeliveryDetail,
  Button,
  DetailColumn,
  Text,
  StepItem,
} from './styles';

interface IProps {
  data: IDelivery;
}

const Delivery = ({ data }: IProps) => {
  const formattedDate = useMemo(() => formatDate(data.createdAt), []);

  const percent = useMemo(
    () =>
      Status({
        startDate: data?.start_date,
        endDate: data?.end_date,
      }),
    []
  );

  return (
    <Container>
      <TitleWrapper>
        <Icon name="local-shipping" size={24} color="#7D40E7" />
        <Title fontSize={14} color="#7D40E7">
          Encomenda {data.id}
        </Title>
      </TitleWrapper>
      <Progress percent={50}>
        <Step>
          {({ accomplished, index }) => (
            <StepItem accomplished={String(accomplished)}>{index + 1}</StepItem>
          )}
        </Step>
      </Progress>
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
        <Button>
          <Text fontSize={14} color="#7D40E7" bold>
            Ver detalhes
          </Text>
        </Button>
      </DeliveryDetail>
    </Container>
  );
};

export default Delivery;
