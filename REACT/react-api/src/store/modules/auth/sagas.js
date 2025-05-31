import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    // const { email, password } = payload;
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Login efetuado com sucesso');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`; // pega o token e envia no cabeçalho de authorization

    history.push(payload.prevPath); // Redireciona o usuário para a página anterior
  } catch (e) {
    toast.error('Usuário ou senha inválidos');
    yield put(actions.loginFailure());
  }
}

// Rehydrate mantém os dados no cabeçalho da aplicação mesmo depois de atualizar a página
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token');
  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`; // pega o token e envia no cabeçalho de authorization
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
