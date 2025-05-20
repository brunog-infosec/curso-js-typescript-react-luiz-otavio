import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
    // console.log('Botão Clicado');
  }

  return (
    <Container>
      <Title>Página de Login</Title>
      <Paragrafo>Sistema de Alunos 1.0</Paragrafo>
      <button onClick={handleClick}>Enviar</button>
    </Container>
  );
}
