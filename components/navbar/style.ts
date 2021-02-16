import styled from 'styled-components';
import { addFlexbox, addFont } from '@/utils/index';
import colors from '@/utils/colors';

export const CustomNavbar = styled.div`
  width: 100%;
  height: 70px;
  ${addFlexbox('row', 'center', 'space-between')};
  background-color: ${colors.navbar};
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Logo = styled.h1`
  ${addFont('Medium')};
  color: white;
`;

export const Menu = styled.ul`
  ${addFlexbox('row', 'center', 'space-between')};
  list-style: none;
`;

export const MenuItem = styled.li`
  font-size: 11pt;
  margin-left: 20px;
  ${addFont()};
  cursor: pointer;
  color: ${({ active }: any) => (active ? `${colors.primaryText}` : `${colors.secundaryText}`)};
  transition: 0.5s;

  &:hover {
    color: white;
  }
`;
