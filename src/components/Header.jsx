import React, { useContext } from "react";
import { sidebarContext } from "../contexts/SidebarProvider";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { setIsOpen, isOpen } = useContext(sidebarContext);
  return (
    <header className="bg-pink-200">
      <div>header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag></BsBag>
      </div>
    </header>
  );
};

export default Header;
