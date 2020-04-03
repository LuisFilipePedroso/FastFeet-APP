import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import { formatDate } from '~/utils/FormatDate';
import IDelivery from '~/interfaces/Delivery';
import IDeliveryProblem from '~/interfaces/DeliveryProblem';

import { Container, Content, Item, Text, SmallText } from './styles';

import Header from '~/components/Header';

import { colors } from '~/styles/global';

import api from '~/services/api';

const DeliveryProblemsList = () => {
  const route = useRoute();

  const [problems, setProblems] = useState<IDeliveryProblem[]>();

  const { delivery }: { delivery: IDelivery } = route.params;

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/delivery/${delivery.id}/problems`);
      const data = response.data.map((problem: IDeliveryProblem) => {
        return {
          ...problem,
          formattedDate: formatDate(String(problem.createdAt)),
        };
      });

      setProblems(data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Header />
      <Content>
        {problems?.map((problem: IDeliveryProblem) => (
          <Item>
            <Text>{problem.description}</Text>
            <SmallText>{problem.formattedDate}</SmallText>
          </Item>
        ))}
      </Content>
    </Container>
  );
};

export default DeliveryProblemsList;
