import React, { useState } from "react";
import Button from "./Button";
import { FiMenu } from "react-icons/fi";
import { SiWebmoney } from "react-icons/si";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className=" text-[14px]">
      <div className=" h-[80px] flex justify-between items-center w-[85%] mx-auto">
        <div className="text-black text-[28px]">
          <SiWebmoney />
        </div>

        <div className="md:flex hidden justify-between items-center w-[60%]">
          <div className="flex text-black space-x-4 font-light">
            <p>Invest</p>
            <p className="">Cash</p>
            <p className="">Borrow</p>
            <p>Learn</p>
          </div>

          <div className="flex space-x-4">
            <Button text="Login" css="border-[1px] border-black text-black " />
            <Button text="Get Started" css="bg-black text-white" />
          </div>
        </div>

        <div className="md:hidden block text-[28px] text-black" onClick={toggle}>
          <FiMenu />
        </div>

        <AnimatePresence exitBeforeEnter onExitComplete={() => setOpen(false)}>
          {open && <Navbar toggle={toggle} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
