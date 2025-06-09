import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};
//reducer: escutar as ações que estão sendo disparadas, em um estado global da aplicação
export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      // console.log('REDUCER', action.payload);
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState; // caso houver falha no login, desloga o usuário enviando o estado inicial
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState; // caso houver falha no login, desloga o usuário enviando o estado inicial
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState; // caso houver falha no login, desloga o usuário enviando o estado inicial
    }

    // Estado para atualizar usuário
    case types.REGISTER_UPDATED_SUCCESS: {
      const newState = { ...state };
      newState.user.nome = action.payload.nome;
      newState.user.email = action.payload.email;
      newState.isLoading = false;
      return newState; // caso houver falha no login, desloga o usuário enviando o estado inicial
    }

    // Estado para criação do usuário
    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState; // caso houver falha no login, desloga o usuário enviando o estado inicial
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState; // caso houver falha no login, desloga o usuário enviando o estado inicial
    }

    default: {
      return state;
    }
  }
}
//Sempre no reducer deve retornar o estado atual, ou um novo estado
