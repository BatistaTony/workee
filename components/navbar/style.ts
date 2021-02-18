import styled from 'styled-components';
import { addFlexbox, addFont } from '@/utils/index';
import colors from '@/utils/colors';
import { motion } from 'framer-motion';

export const CustomNavbar = styled.div`
  width: 100%;
  height: 70px;
  ${addFlexbox('row', 'center', 'space-between')};
  background-color: ${colors.navbar};
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;

  @media (max-width: 650px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }

  @media (min-width: 1600px) {
    padding-left: 6.5%;
    padding-right: 6.5%;
    height: 100px;
  }

  @media (min-width: 2100px) {
    padding-left: 12%;
    padding-right: 12%;
    height: 120px;
  }
`;

export const Logo = styled.h1`
  ${addFont('Bold')};
  color: white;
  font-size: 13pt;

  @media (min-width: 1600px) {
    font-size: 17pt;
  }

  @media (min-width: 2100px) {
    font-size: 25pt;
  }
`;

export const Menu = styled.ul`
  ${addFlexbox('row', 'center', 'space-between')};
  list-style: none;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const MenuItem = styled.li<{ active?: boolean }>`
  font-size: 11pt;
  margin-left: 20px;
  ${addFont()};
  cursor: pointer;
  color: ${({ active }) => (active ? `${colors.primaryText}` : `${colors.secundaryText}`)};
  transition: 0.5s;

  @media (min-width: 1600px) {
    font-size: 14pt;
    margin-left: 30px;
  }

  @media (min-width: 2100px) {
    font-size: 16pt;
    margin-left: 40px;
  }

  &:hover {
    color: white;
  }
`;

export const ButtonMobile = styled.div<{ isShowMenu?: boolean }>`
  width: 30px;
  height: 25px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 1px;
  border-radius: 2px;

  @media (max-width: 650px) {
    display: flex;
  }

  .line {
    width: 25px;
    height: 3px;
    background-color: ${colors.button};
    margin-top: 2px;
    margin-bottom: 2px;
    border-radius: 10px;
    transition: 0.5s;

    &:nth-child(1) {
      transform: ${({ isShowMenu }: any) =>
        isShowMenu ? ' rotate(45deg) translate(4px, 5px) ' : ' '};
    }

    &:nth-child(2) {
      opacity: ${({ isShowMenu }: any) => (isShowMenu ? '0 ' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ isShowMenu }: any) =>
        isShowMenu ? ' rotate(-45deg) translate(5px, -5px) ' : ' '};
    }
  }
`;

export const DivMenuMobile = styled(motion.div)`
  display: none;

  @media (max-width: 650px) {
    display: flex;
  }

  width: 100%;
  height: 100vh;
  position: fixed;
  top: 70px;
  left: 0;
  background-color: ${colors.navbar};
  z-index: 999;

  .simpleWrapper {
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    list-style: none;
    background-color: ${colors.navbar};

    .menuMobile_ {
      display: flex;
      flex-direction: column;
      width: 100%;

      li {
        width: 100%;
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: left;
        font-size: 12pt;
        padding-left: 30px;
        color: white;
        box-sizing: border-box;
      }
    }
  }
`;
