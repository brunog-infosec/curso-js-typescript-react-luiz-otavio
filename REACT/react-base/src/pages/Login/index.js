import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { toast } from 'react-toastify';

export default function Login() {
  toast.success('Login feito com Sucesso', {
    toastId: 'successId',
    theme: 'dark',
  });

  toast.error('Login ou senha inválidos', {
    toastId: 'errorId',
    theme: 'dark',
  });

  return (
    <Container>
      <Title>Página de Login</Title>
      <Paragrafo>Sistema de Alunos 1.0</Paragrafo>
    </Container>
  );
}
