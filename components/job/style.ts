import colors from '@/utils/colors';
import { addFont, addFlexbox } from '@/utils/index';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 90%;
  height: auto;
  padding-bottom: 10%;
  display: grid;
  grid-template-columns: 70% 30%;

  padding-top: 30px;

  @media (max-width: 650px) {
    padding-top: 70px;
  }

  /* @media (min-width: 1600px) {
    grid-template-columns: 80% 20%;
    padding-top: 40px;
  } */

  @media (min-width: 2100px) {
    width: 77%;
    grid-template-columns: 72% 28%;
  }

  @media (max-width: 1150px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }

  .containerSec {
    width: 100%;
    height: auto;

    .cover {
      width: 100%;
      height: 400px;
      background: url(./bg.jpg);
      background-size: cover;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;

      @media (max-width: 850px) {
        height: 300px;
      }

      @media (max-width: 550px) {
        height: 250px;
      }

      @media (min-width: 1600px) {
        height: 500px;
      }

      @media (min-width: 2100px) {
        height: 600px;
      }

      @media (min-width: 2800px) {
        height: 700px;
      }
    }

    .infor {
      width: 100%;
      height: 100px;
      display: grid;
      grid-template-columns: 70% 30%;

      @media (max-width: 500px) {
        height: auto;
        grid-template-columns: 100%;
      }

      @media (min-width: 1600px) {
        height: 150px;
      }

      @media (min-width: 2100px) {
        height: 200px;
      }

      .divWrapper {
        width: 100%;
        height: 100%;
        ${addFlexbox('column', 'flex-start', 'space-between')};
        box-sizing: border-box;
        padding: 20px;

        &:last-child {
          ${addFlexbox('column', 'flex-end', 'flex-end')};

          @media (max-width: 500px) {
            align-items: flex-start;
            justify-content: flex-start;
          }
        }

        @media (max-width: 500px) {
          padding-bottom: 0;
          height: auto;
        }
      }

      .job_title {
        ${addFont('Bold')};
        font-size: 17pt;
        color: white;

        @media (max-width: 550px) {
          font-size: 14pt;
        }

        @media (max-width: 500px) {
          margin: 0;
        }

        @media (min-width: 1600px) {
          font-size: 25pt;
        }

        @media (min-width: 2100px) {
          font-size: 35pt;
        }
      }

      .name {
        ${addFont('Bold')};
        font-size: 13pt;
        color: white;

        @media (max-width: 550px) {
          font-size: 12pt;
        }

        @media (min-width: 1600px) {
          font-size: 16pt;
        }

        @media (min-width: 2100px) {
          font-size: 23pt;
        }

        .address_ {
          color: ${colors.secundaryText};
          ${addFont()};
        }
      }

      .time_post {
        ${addFont()};
        font-size: 13pt;
        color: white;

        @media (max-width: 550px) {
          font-size: 12pt;
        }

        @media (max-width: 500px) {
          margin: 0;
        }

        @media (min-width: 1600px) {
          font-size: 16pt;
        }

        @media (min-width: 2100px) {
          font-size: 23pt;
        }
      }
    }

    .table_rqr {
      width: 100%;
      height: 100px;
      border-radius: 10px;
      margin-top: 20px;
      background: ${colors.navbar};
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 50% 50%;

      @media (max-width: 600px) {
        display: none;
      }

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
        height: 100%;
        border-right: 1px solid ${colors.bg};
        border-bottom: 1px solid ${colors.bg};
        ${addFlexbox('row', 'center', 'center')};

        &:last-child,
        &:nth-child(4) {
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

        p {
          color: ${colors.secundaryText};
        }
      }
    }

    .mobileTable {
      width: 100%;
      list-style: none;
      ${addFlexbox('column', 'center', 'center')};
      margin-top: 20px;
      display: none;

      @media (max-width: 600px) {
        display: flex;
      }

      li {
        width: 90%;
        height: 50px;
        border-radius: 5px;
        background: ${colors.navbar};
        display: grid;
        grid-template-columns: 50% 50%;
        overflow: hidden;
        margin-bottom: 10px;

        span {
          color: white;
          ${addFont('Bold')};
          width: 100%;
          text-align: center;
          height: 100%;
          ${addFlexbox('row', 'center', 'center')};
        }

        p {
          color: white;
          ${addFont()};
          width: 100%;
          text-align: center;
          height: 100%;
          ${addFlexbox('row', 'center', 'center')};
          background: #2d3139;
        }
      }
    }

    .title {
      font-size: 14pt;
      color: white;
      ${addFont('Bold')};

      @media (min-width: 1600px) {
        font-size: 17pt;
      }

      @media (min-width: 2100px) {
        font-size: 27pt;
      }
    }

    .text {
      font-size: 12pt;
      color: ${colors.secundaryText};
      ${addFont()};

      @media (min-width: 1600px) {
        font-size: 15pt;
      }

      @media (min-width: 2100px) {
        font-size: 24pt;
      }
    }

    .overview {
      padding: 20px;
      padding-bottom: 0;
    }

    .job_desc {
      width: 100%;
      box-sizing: border-box;
      padding: 20px;

      .list_skills {
        list-style: circle;
        margin-bottom: 20px;

        li {
          font-size: 12pt;
          ${addFont()};
          color: ${colors.secundaryText};
          margin-left: 30px;

          @media (min-width: 1600px) {
            font-size: 15pt;
          }

          @media (min-width: 2100px) {
            font-size: 21pt;
          }

          @media (min-width: 2800px) {
            font-size: 23pt;
          }
        }
      }
    }

    .apply_ {
      width: 100%;
      padding: 20px;
      padding-bottom: 0;

      .website {
        color: ${colors.button};
      }

      .texxt {
        color: white;
      }

      .email {
        color: ${colors.button};
      }
    }

    .links {
      padding: 30px;

      @media (min-width: 1600px) {
        margin-top: 20px;
      }

      .networks {
        list-style: none;
        ${addFlexbox('row', 'flex-start', 'flex-start')};

        li {
          margin-right: 15px;

          @media (min-width: 1600px) {
            margin-top: 20px;
            margin-right: 30px;
          }

          @media (min-width: 2100px) {
            margin-top: 25px;
            margin-right: 35px;
          }

          svg {
            width: 25px;
            height: 25px;
            fill: white;

            @media (min-width: 1600px) {
              width: 30px;
              height: 30px;
            }

            @media (min-width: 2100px) {
              width: 35px;
              height: 35px;
            }

            @media (min-width: 2800px) {
              width: 40px;
              height: 40px;
            }
          }
        }
      }
    }
  }

  .similarJob {
    width: 100%;
    background: auto;
    height: 70vh;
    box-sizing: border-radius;
    padding-left: 30px;
    padding-right: 30px;

    .list {
      width: 100%;

      @media (max-width: 1150px) {
        display: grid;
        grid-template-columns: 48% 48%;
        justify-content: space-between;
      }

      @media (max-width: 630px) {
        display: grid;
        grid-template-columns: 100%;
      }

      .style__CardStyled-sc-43qgq4-3 {
        margin-bottom: 40px;
      }
    }

    .title {
      font-size: 14pt;
      color: white;
      ${addFont('Bold')};

      @media (min-width: 1600px) {
        font-size: 17pt;
      }

      @media (min-width: 2100px) {
        font-size: 27pt;
      }
    }
  }
`;
