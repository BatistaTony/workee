import styled from 'styled-components';
import colors from '@/utils/colors';
import { addFlexbox, addFont } from '@/utils/index';

export const CustomSearchField = styled.div`
  width: 100%;
  height: 70px;
  background: ${colors.navbar};
  border-radius: 10px;
  margin-top: 25px;
  display: grid;
  grid-template-columns: 1fr 25% 30% 10%;
  overflow: hidden;

  .div_wrapper {
    width: 100%;
    height: 100%;
    border-right: 1px solid ${colors.secundaryText};
    ${addFlexbox('row', 'center', 'center')};
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;

    .ant-input-affix-wrapper {
      width: 90%;
      height: 40%;
      ${addFlexbox('row', 'center', 'flex-start')};

      input {
        width: 90%;
        border: none;
        outline: none;
        height: 100%;
        background: transparent;
        box-sizing: border-box;
        padding-left: 10px;
        color: ${colors.primaryText};
        ${addFont('Bold')};
        font-size: 12pt;
      }

      svg {
        width: 15px;
        height: 15px;
        fill: ${colors.secundaryText};
      }
    }
  }
`;

export const ButtonSearch = styled.button`
  width: 100%;
  height: 100%;
  background: ${colors.button};
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s;
  ${addFont('Bold')};
  font-size: 12pt;
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;
