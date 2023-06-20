import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

// import components
import CartItem from "../components/CartItem";
import { sidebarContext } from "../contexts/SidebarProvider";
import { CartContext } from "../contexts/CartProvider";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(sidebarContext);

  const { cart, clearCart } = useContext(CartContext);
  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping bag (0)</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward></IoMdArrowForward>
        </div>
      </div>

      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item}></CartItem>;
        })}
      </div>

      <div className=" flex flex-col gap-y-3 py-4 mt-4">
        <div className=" flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total: </span>$ 1000
          </div>
          {/* Clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl rounded-full"
          >
            <FiTrash2></FiTrash2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
