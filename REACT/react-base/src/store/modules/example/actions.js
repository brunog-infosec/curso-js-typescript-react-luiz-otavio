//Responsável por disparar as ações
import * as types from '../types';

export function clicaBotao() {
  return {
    type: types.BOTAO_CLICADO,
  };
}
