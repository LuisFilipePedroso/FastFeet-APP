import 'react-native-gesture-handler';

import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import { NavigationContainer } from '@react-navigation/native';

import { store, persistor } from './store';
import App from './App';

const Index: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default Index;
