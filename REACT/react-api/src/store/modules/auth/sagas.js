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

function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  try {
    if (id) {
      //Requisição de atualização usuário
      yield call(axios.put, '/users/', {
        email,
        nome,
        password: password || undefined,
      });
      toast.success('Registro editado!');
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      //Requisição de Criação usuário
      yield call(axios.post, '/users/', {
        email,
        nome,
        password,
      });
      toast.success('Conta Criada com sucesso!');
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
      history.push('/login'); // Redireciona para o login
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente');
      yield put(actions.loginFailure()); // Desloga o usuário
      return history.push('/login'); // Redireciona para o login
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro Desconhecido');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
