import colors from '@/utils/colors';
import { addFlexbox, addFont } from '@/utils/index';
import styled from 'styled-components';

export const CustomFilter = styled.div`
  width: 100%;
  height: 100vh;
  ${addFlexbox('column', 'center', 'flex-start')};
  padding-top: 10px;
  overflow: hidden;
`;

export const CustomListFilter = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;

  .title {
    font-size: 10pt;
    ${addFont('Bold')};
    color: white;
    ${addFlexbox('row', 'center', 'space-between')};

    svg {
      width: 10px;
      height: 10px;
    }
  }
`;

export const ListItemsFilter = styled.ul`
  list-style: none;
  margin-top: 10px;

  .item {
    color: ${colors.secundaryText};
    width: 100%;
    margin-bottom: 10px;
    ${addFlexbox('row', 'center', 'space-between')};
  }

  .ant-checkbox-wrapper {
    ${addFlexbox('row', 'center', 'center')};
    height: 100%;

    input {
      outline: none;
      border: none;
      width: 15px;
      height: 15px;
    }

    .label_ {
      margin-left: 5px;
      font-size: 10pt;
      cursor: pointer;
      height: 100%;
      ${addFont()};
    }
  }

  .jobNumbers {
    padding: 3px;
    border-radius: 2px;
    ${addFlexbox('row', 'center', 'center')};
    color: white;
    font-size: 7pt;
    background: ${colors.secundaryText};
    ${addFont()};
  }
`;
