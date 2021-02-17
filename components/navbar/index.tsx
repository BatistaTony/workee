import MenuMobile from './menuMobile';
import { CustomNavbar, Logo, Menu, MenuItem } from './style';
import Link from 'next/link';

const Navbar = () => {
  return (
    <CustomNavbar>
      <Logo>Workeé</Logo>

      <Menu>
        <Link href="/">
          <MenuItem active={true}>Home</MenuItem>
        </Link>
        <Link href="/">
          <MenuItem>Most Required Tools</MenuItem>
        </Link>
        <Link href="/about">
          <MenuItem>About</MenuItem>
        </Link>
      </Menu>

      <MenuMobile />
    </CustomNavbar>
  );
};

export default Navbar;
