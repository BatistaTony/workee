import { addFlexbox, addFont } from '@/utils/index';
import colors from '@/utils/colors';
import styled, { keyframes } from 'styled-components';

export const CustomHero = styled.div`
  width: 100%;
  height: 100vh;
  background: url(./default-cover.svg);
  background-size: cover;
  ${addFlexbox('row', 'flex-start', 'space-between')};
  box-sizing: border-box;
`;

export const LeftContent = styled.div`
  padding-top: 5%;
  padding-left: 5%;
  box-sizing: border-box;

  @media (max-width: 870px) {
    width: 100%;
    height: 100%;
    ${addFlexbox('column', 'flex-start', 'center')};
    padding-top: 0%;
  }

  @media (min-width: 1400px) {
    padding-top: 10%;
    padding-left: 10%;
  }

  .title,
  .slogan {
    font-size: 30pt;
    ${addFont('Black')};
    color: white;

    @media (min-width: 1400px) {
      font-size: 35pt;
    }

    @media (min-width: 1672px) {
      font-size: 45pt;
    }

    @media (min-width: 2000px) {
      font-size: 55pt;
    }

    @media (min-width: 2600px) {
      font-size: 65pt;
    }

    @media (max-width: 1010px) {
      font-size: 25pt;
    }

    @media (max-width: 670px) {
      font-size: 20pt;
    }
  }

  .text {
    font-size: 13pt;
    ${addFont()};
    color: white;
    width: 700px;

    @media (min-width: 1400px) {
      font-size: 15pt;
    }

    @media (min-width: 1672px) {
      width: 70%;
      font-size: 20pt;
    }

    @media (min-width: 2000px) {
      font-size: 30pt;
      width: 75%;
    }

    @media (min-width: 2600px) {
      font-size: 40pt;
    }

    @media (max-width: 1220px) {
      width: 500px;
    }

    @media (max-width: 579px) {
      font-size: 11pt;
      width: 80%;
    }
  }

  .buttonGo {
    width: 150px;
    height: 40px;
    background: ${colors.button};
    border-radius: 50px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
    ${addFont('Bold')};
    font-size: 13pt;
    color: white;
    margin-top: 20px;

    @media (min-width: 1400px) {
      width: 170px;
      height: 50px;
      font-size: 15pt;
    }

    @media (min-width: 1672px) {
      width: 250px;
      height: 70px;
      font-size: 17pt;
    }

    @media (min-width: 2000px) {
      width: 300px;
      height: 80px;
      font-size: 20pt;
    }

    @media (min-width: 2600px) {
      width: 400px;
      height: 100px;
      font-size: 25pt;
    }
  }
`;

const MoveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }

`;

export const RightContent = styled.div`
  height: 100%;
  ${addFlexbox('row', 'flex-end', 'flex-end')};
  box-sizing: border-box;

  @media (max-width: 870px) {
    display: none;
  }

  .illustration {
    width: 400px;
    height: 400px;
    margin: 10%;
    animation: ${MoveUpDown} 3s infinite;

    @media (min-width: 1400px) {
      width: 500px;
      height: 500px;
      margin: 15%;
      margin-bottom: 5%;
    }

    @media (min-width: 1672px) {
      width: 600px;
      height: 600px;
    }

    @media (min-width: 2000px) {
      width: 700px;
      height: 700px;
      margin: 17%;
    }

    @media (min-width: 2600px) {
      width: 750px;
      height: 750px;
      margin: 20%;
    }

    @media (max-width: 1010px) {
      width: 350px;
      height: 350px;
    }

    @media (max-width: 970px) {
      width: 300px;
      height: 300px;
    }
  }
`;
