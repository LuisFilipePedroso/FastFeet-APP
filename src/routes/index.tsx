import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from '../pages/SignIn';
import Delivery from './Delivery';
import Profile from '../pages/Profile';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Entregas':
              return <Icon name="reorder" size={26} color={color} />;
            case 'Meu Perfil':
              return <Icon name="account-circle" size={26} color={color} />;
            default:
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999999',
        style: {
          display: 'flex',
          alignItems: 'center',
          height: 94,
        },
      }}
    >
      <Tabs.Screen name="Entregas" component={Delivery} />
      <Tabs.Screen name="Meu Perfil" component={Profile} />
    </Tabs.Navigator>
  );
}
