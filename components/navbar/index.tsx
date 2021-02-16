import { CustomNavbar, Logo, Menu, MenuItem } from './style';

const Navbar = () => {
  return (
    <CustomNavbar>
      <Logo>Workeé</Logo>

      <Menu>
        <MenuItem active={true}>Home</MenuItem>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
      </Menu>
    </CustomNavbar>
  );
};

export default Navbar;
