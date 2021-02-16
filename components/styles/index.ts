import styled from 'styled-components';

export const MainContent = styled.div`
  width: 90%;
  height: 90vh;

  position: ${({ scrolled }: any) => (scrolled ? 'fixed' : 'relative')};
  top: 0;
`;

export const SecContent = styled.div`
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 100%;
`;
