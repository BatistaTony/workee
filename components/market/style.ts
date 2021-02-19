import colors from '@/utils/colors';
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
    margin-bottom: 40px;
    width: 90%;

    @media (min-width: 1600px) {
      width: 87%;
      margin-bottom: 30px;
    }

    @media (min-width: 2100px) {
      width: 75%;
      margin-bottom: 40px;
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
  }

  .tableMarket {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 20px;
    background: ${colors.navbar};
    display: grid;
    grid-template-columns: 50% 50%;

    @media (min-width: 1600px) {
      height: 150px;
      margin-bottom: 20px;
    }

    @media (min-width: 2100px) {
      height: 200px;
      margin-bottom: 40px;
    }

    .cels,
    .data_ {
      width: 100%;
      height: 50px;
      border-right: 1px solid ${colors.bg};
      border-bottom: 1px solid ${colors.bg};
      ${addFlexbox('row', 'center', 'center')};

      @media (min-width: 1600px) {
        height: 70px;
      }

      @media (min-width: 2100px) {
        height: 100px;
      }

      &:last-child,
      &:nth-child(5) {
        border-right: none;
      }

      p {
        font-size: 12pt;
        color: white;
        ${addFont('Bold')};
        margin: 0;

        @media (max-width: 770px) {
          font-size: 10pt;
        }

        @media (min-width: 1600px) {
          font-size: 16pt;
        }

        @media (min-width: 2100px) {
          font-size: 23pt;
        }
      }
    }

    .data_ {
      border-bottom: none;
      height: auto;
      ${addFlexbox('row', 'flex-start', 'center')};

      p {
        color: ${colors.secundaryText};
      }
    }
  }

  .list {
    width: 90%;
    list-style: none;

    .item {
      ${addFont()};
      font-size: 12pt;
      color: white;
      margin-top: 10px;

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
