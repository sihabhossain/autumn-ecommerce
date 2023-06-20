import React, { useContext, useEffect, useState } from "react";
import { sidebarContext } from "../contexts/SidebarProvider";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartProvider";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const { setIsOpen, isOpen } = useContext(sidebarContext);

  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
  return (
    <header
      className={`${
        isActive ? "bg-white py-y shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={logo} alt="" />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative "
        >
          <BsBag></BsBag>
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
