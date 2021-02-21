import colors from '@/utils/colors';
import { addFlexbox, addFont } from '@/utils/index';
import styled from 'styled-components';

export const FooterStyled = styled.div`
  width: 100%;
  height: 100px;
  background: ${colors.navbar};
  margin-top: 10%;
  ${addFlexbox('row', 'center', 'center')};

  @media (min-width: 1600px) {
    height: 170px;
  }

  @media (min-width: 2100px) {
    height: 250px;
  }

  p {
    font-size: 11.5pt;
    ${addFont()};
    color: white;
    margin: 0;
    padding: 0;

    @media (max-width: 900px) {
      font-size: 11pt;
    }

    @media (min-width: 1600px) {
      font-size: 13.5pt;
    }

    @media (min-width: 2100px) {
      font-size: 15pt;
    }
  }
`;
