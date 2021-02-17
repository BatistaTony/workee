import styled from 'styled-components';

export const MainContent = styled.div`
  width: 90%;
  height: auto;

  @media (max-width: 650px) {
    margin-top: 80px;
  }

  @media (min-width: 1600px) {
    width: 87%;
  }

  @media (min-width: 2100px) {
    width: 77%;
  }
`;

export const SecContent = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 15% 85%;

  @media (max-width: 990px) {
    grid-template-columns: 17% 83%;
  }

  @media (max-width: 900px) {
    grid-template-columns: 25% 75%;
  }

  @media (max-width: 860px) {
    grid-template-columns: 100%;
  }
`;
