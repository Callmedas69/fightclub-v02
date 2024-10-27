"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { title: "HOME", path: "/" },
  { title: "MINT", path: "/mint" },
  { title: "SWAP", path: "/swap" },
  { title: "SHOWROOM", path: "/showroom" },
  { title: "GAMES", path: "/games" },
  { title: "STAKE", path: "/stake" },
  { title: "STOODIO", path: "/stoodio" },
  { title: "FAQ", path: "/faq" },
];

const NavBar2 = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    close: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="-z-50 fixed left-[40%] mx-auto text-white font-bold">
      <div className="boder border-white/20 mt-12 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-ww-[400px] mx-auto">
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <p className="transform hover:skew-x-12 hover:text-white/50 transition-all duration-300 ease-in-out">
                {link.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 left-5 border z-50 text-white/70 border-white/70 p-2"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <motion.div
        initial={false}
        animate={nav ? "open" : "close"}
        variants={menuVariants}
        className="fixed left-0 top-0 h-full w-full bg-black/90"
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <p className="text-5xl">{link.title}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default NavBar2;
