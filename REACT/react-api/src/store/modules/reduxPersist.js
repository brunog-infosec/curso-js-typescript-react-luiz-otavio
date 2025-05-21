import storage from 'redux-persist/lib/storage';
// uma biblioteca para salvar os dados persistentes no local storage
import { persistReducer } from 'redux-persist';
// Uma maneira de combinar os reducers

export default function persistedReducers(reducers) {
  const persistedReducers = persistReducer(
    {
      key: 'NOME_DA_APLICACAO',
      storage,
      whitelist: ['example'], // Qual modulo vai salvar
    },
    reducers,
  );

  return persistedReducers;
}
