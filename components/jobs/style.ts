import { addFlexbox, addFont } from '@/utils/index';
import styled from 'styled-components';
import colors from '@/utils/colors';

export const ListJobs = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  box-sizing: border-box;
  padding-left: 40px;
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 70px;
  ${addFlexbox('row', 'flex-start', 'space-between')};

  .title {
    color: white;
    ${addFont('Bold')};
  }

  .ant-select {
    .ant-select-selection-item {
      color: white;
      ${addFont()};
    }

    svg {
      fill: white;
    }
  }
`;

export const ListStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: space-between;
`;

export const CardStyled = styled.div`
  width: 100%;
  height: 270px;
  border-radius: 5px;
  background: ${colors.navbar};
  margin-bottom: 40px;
  box-sizing: border-box;
  padding: 15px;
  position: relative;

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
  }

  .job_title {
    ${addFont('Bold')};
    font-size: 12pt;
    color: white;
    margin-top: 5px;
  }

  .companyName_address {
    ${addFont()};
    font-size: 9.5pt;
    color: white;
  }

  .items {
    ${addFlexbox('row', 'flex-start', 'flex-start')};
    flex-wrap: wrap;
    list-style: none;
    margin-top: 10px;

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
    }
  }

  .footerCard {
    width: 90%;
    position: absolute;
    bottom: 10px;
    ${addFlexbox('row', 'center', 'space-between')};
    height: 30px;

    .timePost {
      ${addFont('Bold')};
      color: white;
      height: 100%;
      margin: 0;
      padding: 0;
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
`;
