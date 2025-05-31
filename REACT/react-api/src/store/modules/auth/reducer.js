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
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState; // caso houver falha no login, desloga o usuário enviando o estado inicial
    }

    default: {
      return state;
    }
  }
}
//Sempre no reducer deve retornar o estado atual, ou um novo estado
