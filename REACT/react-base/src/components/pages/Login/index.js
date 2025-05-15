import React from "react";
import { Title, Paragrafo } from './styled';
import { Container } from "../../../styles/GlobalStyles";

export default function Login() {
  return (
    <Container>
      <Title>
        Página de Login
        <small>Bom dia</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet</Paragrafo>
    </Container>
  );
}
