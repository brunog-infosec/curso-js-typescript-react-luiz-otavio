import styled from 'styled-components';

export const AlunoContainer = styled.div`
  margin-top: 30px;

  div {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50px;
  }
`;
