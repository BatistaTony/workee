import { addFlexbox, addFont } from '@/utils/index';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100;
  height: auto;
  ${addFlexbox('column', 'center', 'center')};
  margin-top: 50px;

  @media (min-height: 1000px) {
    height: 90vh;
  }

  @media (max-width: 650px) {
    margin-top: 100px;
  }

  .title {
    width: 100%;
    text-align: center;

    font-size: 30pt;
    ${addFont('Black')};
    color: white;

    @media (min-width: 1400px) {
      font-size: 35pt;
    }

    @media (min-width: 1672px) {
      font-size: 45pt;
    }

    @media (min-width: 2000px) {
      font-size: 55pt;
    }

    @media (min-width: 2600px) {
      font-size: 65pt;
    }

    @media (max-width: 1010px) {
      font-size: 25pt;
    }

    @media (max-width: 670px) {
      font-size: 20pt;
    }
  }

  .text {
    font-size: 13pt;
    ${addFont()};
    color: white;
    width: 700px;
    text-align: center;

    @media (min-width: 1400px) {
      font-size: 15pt;
    }

    @media (min-width: 1672px) {
      width: 70%;
      font-size: 20pt;
    }

    @media (min-width: 2000px) {
      font-size: 30pt;
      width: 75%;
    }

    @media (min-width: 2600px) {
      font-size: 35pt;
    }

    @media (max-width: 1220px) {
      width: 500px;
    }

    @media (max-width: 579px) {
      font-size: 11pt;
      width: 80%;
    }
  }
`;
