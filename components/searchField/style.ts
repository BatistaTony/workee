import styled from 'styled-components';
import colors from '@/utils/colors';
import { addFlexbox, addFont } from '@/utils/index';

export const CustomSearchField = styled.div`
  width: 100%;
  height: 60px;
  background: ${colors.navbar};
  border-radius: 10px;
  margin-top: 25px;
  display: grid;
  grid-template-columns: 1fr 25% 30% 10%;
  overflow: hidden;
  z-index: 99;

  @media (min-width: 1600px) {
    height: 80px;
    margin-top: 50px;
  }

  @media (min-width: 2100px) {
    height: 90px;
    margin-top: 60px;
  }

  @media (max-width: 900px) {
    height: 50px;
  }

  @media (max-width: 870px) {
    height: auto;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50px 50px;
    background: transparent;
    grid-row-gap: 10px;
  }

  @media (max-width: 510px) {
    height: auto;
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, 50px);
    grid-row-gap: 10px;
  }

  .div_wrapper {
    width: 100%;
    height: 100%;
    border-right: 1px solid ${colors.secundaryText};
    ${addFlexbox('row', 'center', 'center')};
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    transition: 0.5s;

    @media (max-width: 870px) {
      padding-left: 5px;
      padding-right: 5px;
      border: none;
      width: 96%;
      height: 100%;
      border-radius: 10px;
      background: ${colors.navbar};
    }

    @media (max-width: 510px) {
      width: 100%;
    }

    .ant-input-affix-wrapper {
      width: 90%;
      height: 50%;
      ${addFlexbox('row', 'center', 'flex-start')};

      @media (max-width: 500px) {
        width: 95%;
      }

      input {
        width: 90%;
        border: none;
        outline: none;
        height: 100%;
        background: transparent !important;
        box-sizing: border-box;
        padding-left: 10px;
        &:focus {
          border: none;
        }
        color: ${colors.primaryText};
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

      svg {
        width: 15px;
        height: 15px;
        fill: ${colors.secundaryText};

        @media (min-width: 1600px) {
          width: 20px;
          height: 20px;
        }

        @media (min-width: 2100px) {
          width: 25px;
          height: 25px;
        }
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

  @media (max-width: 900px) {
    font-size: 11pt;
  }

  @media (max-width: 870px) {
    width: 96%;
    height: 90%;
    border-radius: 10px;
  }

  @media (max-width: 500px) {
    width: 70%;
    justify-self: center;
  }

  @media (min-width: 1600px) {
    font-size: 13pt;
  }

  @media (min-width: 2100px) {
    font-size: 14pt;
  }

  &:hover {
    opacity: 0.8;
  }
`;
