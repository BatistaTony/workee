import { addFlexbox, addFont } from '@/utils/index';
import styled from 'styled-components';
import colors from '@/utils/colors';

export const ListJobs = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  box-sizing: border-box;
  padding-left: 40px;

  @media (max-width: 860px) {
    padding-left: 0;
  }

  .pagination {
    width: 100%;
    ${addFlexbox('row', 'center', 'center')};
    list-style: none;
    padding-bottom: 5%;

    li {
      margin-right: 30px;
      height: 30px;
      width: 30px;
      border-radius: 5px;
      font-size: 10pt;
      background: ${colors.navbar};
      ${addFont('Bold')};
      ${addFlexbox('row', 'center', 'center')};
      transition: 0.5s;

      a {
        text-decoration: none;
        color: white;
      }

      &:hover {
        background: ${colors.secundaryText};
      }

      @media (min-width: 1600px) {
        font-size: 13pt;
        height: 36px;
        width: 36px;
      }

      @media (min-width: 2100px) {
        font-size: 15.5pt;
        height: 43px;
        width: 43px;
      }

      @media (min-width: 2800px) {
        font-size: 18.5pt;
        height: 50px;
        width: 50px;
      }
    }
  }
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 70px;
  ${addFlexbox('row', 'flex-start', 'space-between')};

  .title {
    color: white;
    ${addFont('Bold')};
    font-size: 18pt;

    @media (min-width: 1600px) {
      font-size: 22pt;
    }

    @media (min-width: 2100px) {
      font-size: 30pt;
    }
  }

  .ant-select {
    .ant-select-selection-item {
      color: white;
      ${addFont()};

      font-size: 12pt;

      @media (min-width: 1600px) {
        font-size: 14pt;
      }

      @media (min-width: 2100px) {
        font-size: 17pt;
      }
    }

    svg {
      fill: white;

      @media (min-width: 1600px) {
        width: 15px;
        height: 15px;
      }

      @media (min-width: 2100px) {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const ListStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 32%);
  }

  @media (max-width: 1075px) {
    grid-template-columns: repeat(2, 47%);
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 48.5%);
  }

  @media (max-width: 630px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(3, 32%);
    margin-top: 30px;
  }

  @media (min-width: 2100px) {
    margin-top: 40px;
  }
`;

export const CardStyled = styled.div`
  width: 100%;
  height: 270px;
  border-radius: 5px;
  background: ${colors.navbar};
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 15px;
  position: relative;

  @media (max-width: 1075px) {
    height: 230px;
  }

  @media (max-width: 920px) {
    height: 270px;
  }

  @media (max-width: 860px) {
    height: 230px;
  }

  @media (max-width: 730px) {
    height: 260px;
  }

  @media (max-width: 630px) {
    height: auto;
  }

  @media (min-width: 1600px) {
    padding: 20px;
    height: 300px;
    margin-bottom: 30px;
  }

  @media (min-width: 2100px) {
    padding: 30px;
    height: 400px;
    margin-bottom: 40px;
  }

  .header_ {
    width: 100%;
    ${addFlexbox('row', 'flex-start', 'flex-start')};

    .info {
      padding-left: 20px;
      box-sizing: border-box;
      ${addFlexbox('column', 'flex-start', 'space-between')};
    }
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: ${colors.button};

    @media (min-width: 1600px) {
      width: 60px;
      height: 60px;
    }

    @media (min-width: 2100px) {
      width: 75px;
      height: 75px;
    }
  }

  .job_title {
    ${addFont('Bold')};
    font-size: 12pt;
    color: white;
    margin-top: 5px;

    @media (min-width: 1600px) {
      font-size: 14pt;
    }

    @media (min-width: 2100px) {
      font-size: 19pt;
    }
  }

  .companyName_address {
    ${addFont()};
    font-size: 9.5pt;
    color: white;
    margin: 0;

    @media (min-width: 1600px) {
      font-size: 12pt;
    }

    @media (min-width: 2100px) {
      font-size: 16pt;
    }
  }

  .items {
    ${addFlexbox('row', 'flex-start', 'flex-start')};
    flex-wrap: wrap;
    list-style: none;
    margin-top: 15px;

    @media (max-width: 630px) {
      margin-bottom: 30px;
    }

    @media (min-width: 1600px) {
      margin-top: 25px;
    }

    @media (min-width: 2100px) {
      margin-top: 30px;
    }

    .item {
      border-radius: 3px;
      background: #2d3139;
      box-shadow: 0 0 3px ${colors.navbar};
      color: white;
      margin-right: 10px;
      padding: 2px;
      ${addFont('Bold')};
      font-size: 9pt;
      padding-left: 5px;
      padding-right: 5px;
      margin-bottom: 10px;

      @media (min-width: 1600px) {
        font-size: 11pt;
        padding-left: 7px;
        padding-right: 7px;
        margin-bottom: 13px;
      }

      @media (min-width: 2100px) {
        font-size: 13pt;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 16px;
      }
    }
  }

  .footerCard {
    width: 90%;
    position: absolute;
    bottom: 10px;
    ${addFlexbox('row', 'center', 'space-between')};
    height: 30px;

    @media (min-width: 1600px) {
      bottom: 15px;
      height: 45px;
    }

    @media (min-width: 2100px) {
      bottom: 20px;
      height: 55px;
    }

    .timePost {
      ${addFont()};
      color: white;
      height: 100%;
      margin: 0;
      padding: 0;
      font-size: 12pt;

      @media (min-width: 1600px) {
        font-size: 14pt;
      }

      @media (min-width: 2100px) {
        font-size: 18pt;
      }
    }
  }
`;

export const ButtonApply = styled.button`
  width: 100px;
  height: 100%;
  background: ${colors.button};
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  ${addFont('Bold')};
  font-size: 10pt;
  color: white;

  @media (min-width: 1600px) {
    width: 130px;
    font-size: 14pt;
  }

  @media (min-width: 2100px) {
    width: 160px;
    font-size: 18pt;
  }
`;
