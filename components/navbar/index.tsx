import MenuMobile from './menuMobile';
import { CustomNavbar, Logo, Menu, MenuItem } from './style';

const Navbar = () => {
  return (
    <CustomNavbar>
      <Logo>Workeé</Logo>

      <Menu>
        <MenuItem active={true}>Home</MenuItem>
        <MenuItem>####</MenuItem>
        <MenuItem>####</MenuItem>
        <MenuItem>About</MenuItem>
      </Menu>

      <MenuMobile />
    </CustomNavbar>
  );
};

export default Navbar;
