import { CustomHero, LeftContent, RightContent } from './style';
import Link from 'next/link';

const Hero = () => {
  return (
    <CustomHero>
      <LeftContent>
        <h1 className="title">Workeé</h1>
        <h1 className="slogan">Find a better opportunity here</h1>
        <p className="text">
          Workeé is a platform where everyone can have access for new job opportunities in their
          area and profession and work comfortable wherever they are.
        </p>
        <Link href="#start">
          <button className="buttonGo">Start now</button>
        </Link>
      </LeftContent>
      <RightContent>
        <img src="./undraw_working_late_pukg.svg" className="illustration" alt="" />
      </RightContent>
    </CustomHero>
  );
};

export default Hero;
