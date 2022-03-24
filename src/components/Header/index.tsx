import { useState } from "react";
import { HiOutlineMenu, HiOutlineLogout } from "react-icons/hi";
import { VscBell } from "react-icons/vsc";

import SideMenu from "../SideMenu";

import Container from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);
  return (
    <Container>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <HiOutlineMenu
        className="functional-icon"
        color="white"
        fontSize={"2.3rem"}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div id="right-header-icons-wrapper">
        <VscBell
          className="functional-icon"
          color="white"
          fontSize={"2.3rem"}
        />
        <HiOutlineLogout
          className="functional-icon"
          color="white"
          fontSize={"2.3rem"}
        />
      </div>
    </Container>
  );
};

export default Header;
