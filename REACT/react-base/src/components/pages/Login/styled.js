import styled from "styled-components";

export const Title = styled.h1`
  color: ${props => (props.isRed ? 'red' : 'blue')}; //configurações do title
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  } // configurações da tag small
`;

export const Paragrafo = styled.p`
  font-size: 18px;
`;
