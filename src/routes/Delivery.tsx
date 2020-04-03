import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '~/pages/Dashboard';
import DeliveryDetails from '~/pages/DeliveryDetails';
import DeliveryProblemForm from '~/pages/DeliveryProblemForm';
import DeliveryProblemsList from '~/pages/DeliveryProblemsList';

const Stack = createStackNavigator();

export default function DeliveryRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerTransparent: true,
      }}
      initialRouteName="Entregas"
    >
      <Stack.Screen
        name="Entregas"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detalhes" component={DeliveryDetails} />
      <Stack.Screen name="Informar Problema" component={DeliveryProblemForm} />
      <Stack.Screen
        name="Visualizar Problemas"
        component={DeliveryProblemsList}
      />
    </Stack.Navigator>
  );
}
