import { ContainerStyled } from './style';

const MarketContainer = () => {
  const areas = [
    'Front End Engineer',
    'BackEnd Developer',
    'DevOps Expert',
    'Front End Engineer',
    'BackEnd Developer',
    'DevOps Expert',
  ];

  const tools = [
    'Reactjs',
    'Javascript',
    'Typescript',
    'Nodejs',
    'Reactjs',
    'Javascript',
    'Typescript',
  ];

  return (
    <ContainerStyled>
      <div className="inform">
        <h1 className="title">Most Required Area in the market</h1>
        <ul className="list">
          {areas.map((item, index) => (
            <li className="item" key={index}>
              {' '}
              {index + 1}# {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="inform">
        <h1 className="title">Most Required tools in the market</h1>
        <ul className="list">
          {tools.map((item, index) => (
            <li className="item" key={index}>
              {' '}
              {index + 1}# {item}
            </li>
          ))}
        </ul>
      </div>
    </ContainerStyled>
  );
};

export default MarketContainer;
