"use client";

import React from "react";
import Link from "next/link";

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

const NavbarOfficial = () => {
  return (
    <nav className="">
      <ul className="flex flex-row gap-5 p-8 justify-center border-gray/90">
        {navLinks.map((link, index) => (
          <Link key={index} href={`${link.path.toLowerCase()}`}>
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarOfficial;
