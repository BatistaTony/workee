import { addFlexbox, addFont } from '@/utils/index';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 100%;
  height: auto;
  margin-top: 70px;
  ${addFlexbox('column', 'center', 'center')};

  @media (max-width: 650px) {
    margin-top: 100px;
  }

  .inform {
    margin-bottom: 20px;
    width: 90%;

    @media (min-width: 1600px) {
      width: 87%;
      margin-bottom: 30px;
    }

    @media (min-width: 2100px) {
      width: 75%;
      margin-bottom: 40px;
    }
  }

  .title {
    width: 90%;
    ${addFont('Bold')};
    color: white;
    font-size: 17pt;

    @media (min-width: 1600px) {
      font-size: 23pt;
    }

    @media (min-width: 2100px) {
      font-size: 30pt;
    }
  }

  .list {
    width: 90%;
    list-style: none;

    .item {
      ${addFont()};
      font-size: 12pt;
      color: white;
      margin-bottom: 10px;

      @media (max-width: 870px) {
        font-size: 11pt;
      }

      @media (min-width: 1600px) {
        font-size: 14pt;
        margin-bottom: 15px;
      }

      @media (min-width: 2100px) {
        font-size: 16pt;
      }
    }
  }
`;
