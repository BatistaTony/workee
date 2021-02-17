import colors from '@/utils/colors';
import { addFlexbox, addFont } from '@/utils/index';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CustomFilter = styled.div<{ isMobile: boolean }>`
  width: 100%;
  height: auto;
  ${addFlexbox('column', 'center', 'flex-start')}
  padding-top: 10px;

  @media (max-width: 860px) {
    display: ${({ isMobile }: any) => (isMobile ? 'flex' : 'none')};
  }
`;

export const CustomListFilter = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;

  @media (min-width: 1600px) {
    margin-top: 25px;
  }

  @media (min-width: 2100px) {
    margin-top: 30px;
  }

  .title {
    font-size: 10pt;
    ${addFont('Bold')};
    color: white;
    ${addFlexbox('row', 'center', 'space-between')};

    @media (min-width: 1600px) {
      font-size: 13.5pt;
    }

    @media (min-width: 2100px) {
      font-size: 14.5pt;
    }
  }
`;

export const ListItemsFilter = styled.ul`
  list-style: none;
  margin-top: 15px;

  @media (min-width: 1600px) {
    margin-top: 20px;
  }

  @media (min-width: 2100px) {
    margin-top: 25px;
  }

  .item {
    color: ${colors.secundaryText};
    width: 100%;
    margin-bottom: 10px;
    ${addFlexbox('row', 'center', 'space-between')};

    @media (min-width: 1600px) {
      margin-top: 15px;
    }

    @media (min-width: 2100px) {
      margin-top: 20px;
    }
  }

  .checkbox-wrapper {
    ${addFlexbox('row', 'center', 'center')};
    height: 100%;

    .checkbox-input {
      outline: none;
      width: 15px;
      height: 15px;
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;
      border: 1px solid ${colors.secundaryText};
      border-radius: 3px;
      transition: 0.5s;

      &:checked {
        border: none;
        background-color: ${colors.button};
      }

      @media (min-width: 1600px) {
        width: 20px;
        height: 20px;
        border: 1.5px solid ${colors.secundaryText};
        border-radius: 4px;
      }

      @media (min-width: 2100px) {
        width: 30px;
        height: 30px;
        border: 2px solid ${colors.secundaryText};
      }
    }

    .label_ {
      margin-left: 5px;
      font-size: 10pt;
      cursor: pointer;
      height: 100%;
      ${addFont()};

      @media (min-width: 1600px) {
        font-size: 12.5pt;
        margin-left: 15px;
      }

      @media (min-width: 2100px) {
        font-size: 13.5pt;
        margin-left: 20px;
      }
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

    @media (min-width: 1600px) {
      width: 20px;
      height: 20px;
      font-size: 10pt;
    }

    @media (min-width: 2100px) {
      width: 30px;
      height: 30px;
      font-size: 12pt;
    }
  }
`;

export const SelectStyled: typeof Select = styled(Select)<SelectProps>`
  width: 100%;

  .ant-select-selector {
    background-color: transparent !important;
    border: 1px solid transparent !important;
    ${addFont()};
  }

  .ant-select-selection-placeholder,
  .ant-select-selection-item-content {
    ${addFont()};
    font-size: 12pt;

    @media (max-width: 870px) {
      font-size: 11pt;
    }

    @media (min-width: 1600px) {
      font-size: 13pt;
    }

    @media (min-width: 2100px) {
      font-size: 14pt;
    }
  }
`;

export const ButtomToggleFilter = styled.button`
  width: 35px;
  height: 35px;
  background: ${colors.button};
  border: none;
  outline: none;
  border-radius: 7px;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 20px;
  margin-right: 25px;
  z-index: 950;
  display: none;

  @media (max-width: 860px) {
    ${addFlexbox('row', 'center', 'center')};
  }

  svg {
    fill: white;
    width: 20px;
    height: 20px;
  }
`;

export const FilterMobileStyled = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 0;
  left: 0;
  display: none;
  z-index: 95;

  @media (max-width: 860px) {
    display: flex;
  }

  .divWrapperFilter {
    height: 80%;
    background: ${colors.navbar};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    width: 220px;
    margin-left: 20px;
    margin-bottom: 25px;
    border-radius: 5px;
    justify-self: flex-end;
    align-self: flex-end;
    overflow-y: auto;
    padding-left: 10px;
    padding-right: 10px;

    &::-webkit-scrollbar {
      background: ${colors.bg};
      width: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${colors.button};
      border-radius: 5px;
    }
  }
`;
