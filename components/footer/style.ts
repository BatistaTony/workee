import { addFlexbox, addFont } from '@/utils/index';
import styled from 'styled-components';

export const FooterStyled = styled.div`
  width: 100%;
  height: 100px;
  background: #cf0082;
  margin-top: 10%;
  ${addFlexbox('row', 'center', 'center')};

  @media (min-width: 1600px) {
    height: 170px;
  }

  @media (min-width: 2100px) {
    height: 250px;
  }

  p {
    font-size: 13pt;
    ${addFont('Bold')};
    color: white;

    @media (max-width: 900px) {
      font-size: 11pt;
    }

    @media (min-width: 1600px) {
      font-size: 15pt;
    }

    @media (min-width: 2100px) {
      font-size: 17pt;
    }
  }
`;