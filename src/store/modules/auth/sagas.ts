import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }: any) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliveryman/${id}`);

    const user = response.data;

    yield put(signInSuccess(user));

    // history.push('/deliveries');
  } catch (err) {
    Alert.alert('Falha na autenticação', 'ID não existente, tente novamente');
    yield put(signInFailure());
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
