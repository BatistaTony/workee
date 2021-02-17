import styled from 'styled-components';
import { Input } from 'antd';
import { addFlexbox, addFont } from '@/utils/index';
import colors from '@/utils/colors';
import { InputProps } from 'antd/lib/input';

export const CustomInputStyled = styled(Input)<InputProps>`
  width: 90%;
  height: 40%;
  ${addFlexbox('row', 'center', 'flex-start')};

  input {
    width: 90%;
    border: none;
    outline: none;
    height: 100%;
    background: transparent !important;
    box-sizing: border-box;
    padding-left: 10px;

    color: ${colors.primaryText};
    ${addFont()};
    font-size: 12pt;
  }

  svg {
    width: 15px;
    height: 15px;
    fill: ${colors.secundaryText};
  }
`;
