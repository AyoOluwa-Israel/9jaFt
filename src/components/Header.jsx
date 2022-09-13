import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className=" text-[14px]">
      <div className=" h-[80px] flex justify-between items-center w-[85%] mx-auto">
        <div>
          <p>Test</p>
        </div>

        <div className="md:flex hidden justify-between items-center w-[60%]">
          <div className="flex text-[#1E3D58] space-x-4 font-light">
            <p>Invest</p>
            <p className="">Cash</p>
            <p className="">Borrow</p>
            <p>Learn</p>
          </div>

          <div className="flex space-x-4">
            <Button
              text="Login"
              css="border-[1px] border-[#1E3D58] text-[#1E3D58] "
            />
            <Button text="Get Started" css="bg-[#1E3D58] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
