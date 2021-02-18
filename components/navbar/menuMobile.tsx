import useToggle from '@/hooks/useToggle';
import { ButtonMobile, DivMenuMobile } from './style';
import Link from 'next/link';

const MenuMobile = () => {
  const { isActive, toggle } = useToggle(false);

  return (
    <>
      {isActive && (
        <DivMenuMobile initial={{ x: -100 }} animate={{ x: 0 }}>
          <div className="simpleWrapper">
            <ul className="ulStyle menuMobile_">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/market">
                <li>Market</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
            </ul>
          </div>
        </DivMenuMobile>
      )}
      <ButtonMobile onClick={toggle} isShowMenu={isActive}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </ButtonMobile>
    </>
  );
};

export default MenuMobile;
