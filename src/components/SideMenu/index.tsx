import { IoMdClose } from "react-icons/io";

import MenuItem from "../MenuItem";

import Container from "./styles";

import menuItems from "../../assets/menuItems";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideMenu = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <Container isOpen={isOpen}>
      <div id="overlay"></div>
      <div id="nav-container">
        <IoMdClose id="side-menu-close-icon" onClick={() => setIsOpen(false)} />
        {menuItems.map(({ menuItem, subItems }) => (
          <MenuItem menuItem={menuItem} subItems={subItems} />
        ))}
      </div>
    </Container>
  );
};

export default SideMenu;
