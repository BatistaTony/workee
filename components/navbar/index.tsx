import MenuMobile from './menuMobile';
import { CustomNavbar, Logo, Menu, MenuItem } from './style';
import Link from 'next/link';

interface INavbar {
  title: string;
}

const Navbar = ({ title }: INavbar) => {
  return (
    <CustomNavbar>
      <Logo>Workeé</Logo>

      <Menu>
        <Link href="/">
          <MenuItem active={title.toLowerCase() === 'workeé'}>Home</MenuItem>
        </Link>
        <Link href="/market">
          <MenuItem active={title.toLowerCase() === 'market'}>Market</MenuItem>
        </Link>
        <Link href="/about">
          <MenuItem active={title.toLowerCase() === 'about'}>About</MenuItem>
        </Link>
      </Menu>

      <MenuMobile />
    </CustomNavbar>
  );
};

export default Navbar;
