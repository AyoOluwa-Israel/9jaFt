import React from "react";
import { FaTimes } from "react-icons/fa";

import { motion } from "framer-motion";

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
  visible: {
    y: "0vh",
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Navbar = ({toggle}) => {
  return (
    <motion.div
      variants={backdrop}
      animate="visible"
      initial="hidden"
      exit="hidden"
      className="bg-grey fixed h-[100vh] w-[100%] top-0 left-0 overscroll-none z-[200]"
    >
      <motion.div
        variants={modal}
        className="w-[80%] h-[300px] bg-white rounded-[20px] mx-auto mt-[4em] space-y-4 text-center p-[2em] text-black"
      >
        <div className="flex justify-between text-[24px]">
          <div></div>
          <FaTimes onClick={toggle}/>
        </div>

        <p className="py-[1em]">Login</p>
        <p className="">Sign Up</p>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
