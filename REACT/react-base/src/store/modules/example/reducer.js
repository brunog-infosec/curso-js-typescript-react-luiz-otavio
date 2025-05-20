import * as types from '../types';

const initialState = {
  botaoClicado: false,
};
//reducer: escutar as ações que estão sendo disparadas, em um estado global da aplicação
export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso =)');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Falhou ...');
      return state;
    }

    default: {
      return state;
    }
  }
}
//Sempre no reducer deve retornar o estado atual, ou um novo estado
