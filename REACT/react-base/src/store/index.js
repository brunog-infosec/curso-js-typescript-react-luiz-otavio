import { legacy_createStore as createStore } from 'redux';

const initialState = {
  botaoClicado: false,
};
//reducer: escutar as ações que estão sendo disparadas
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default: {
      return state;
    }
  }
};
//Sempre no reducer deve retornar o estado atual, ou um novo estado

const store = createStore(reducer);

export default store;
