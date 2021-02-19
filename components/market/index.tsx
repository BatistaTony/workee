import { ContainerStyled } from './style';
import jobs from '@/utils/jobs.json';
import { useEffect, useState } from 'react';
import * as R from 'ramda';

const MarketContainer = () => {
  const [areas, setAreas] = useState<string[]>([]);
  const [tools, setTools] = useState<string[]>([]);

  let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);

  const getMostRequiredArea = async () => {
    let areasSaved: string[] = [];

    await jobs.map(job => {
      areasSaved.push(job.job_title);
    });

    setAreas([...(new Set(findDuplicates(areasSaved)) as any)]);
  };

  const getMostRequiredTools = async () => {
    let toolsSaved: string[] = [];

    await jobs.map(job => {
      toolsSaved.push(...job.required_skills);
    });

    setTools([...(new Set(findDuplicates(toolsSaved)) as any)]);
  };

  useEffect(() => {
    getMostRequiredArea();
    getMostRequiredTools();
  }, []);

  const cels = ['Most wanted tools in market', 'Most wanted area in market'];

  return (
    <ContainerStyled>
      <div className="inform">

      <h1 className="title">Market</h1>


        <div className="tableMarket">
          {cels.map((item, index) => (
            <div className="cels" key={index}>
              <p>{item}</p>
            </div>
          ))}

          <div className="data_">
            <ul className="list">
              {tools.map((item, index) => (
                <li className="item" key={index}>
                  {' '}
                  {index + 1}# {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="data_">
            <ul className="list">
              {areas.map((item, index) => (
                <li className="item" key={index}>
                  {' '}
                  {index + 1}# {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <h1 className="title">Most Required Area in the market</h1>
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
        </ul> */}
      </div>
    </ContainerStyled>
  );
};

export default MarketContainer;
