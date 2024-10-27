"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ttsLogo from "@/assets/ttsLogo.jpg"; // Replace with your actual icon import

const navLinks = [
  { title: "TTS TOKEN", path: "/" },
  { title: "FIGHT NFT", path: "/mint" },
  { title: "WHITEPAPER", path: "/swap" },
  { title: "TEAM", path: "/showroom" },
  { title: "FAQ", path: "/faq" },
  { title: "DEXTOOLS", path: "/faq" },
];

const NavbarGreen = () => {
  return (
    <nav className="flex items-center justify-between h-20 px-36 pt-10">
      {/* Left Section */}

      {/* lOGO */}
      <div>
        <Image
          src={ttsLogo}
          alt="TTS Logo"
          width={75}
          height={75}
          className="rounded-full"
        />
      </div>

      {/* Middle Section */}
      <div className="flex justify-center items-center space-x-10 bg-black rounded-3xl">
        {/* Links */}
        {navLinks.map((nav, index) => (
          <div
            key={index}
            className="px-6 py-3 font-semibold text-white flex items-center cursor-pointer z-50"
          >
            {nav.path ? (
              <Link href={nav.path} passHref className="hover:text-blue-500">
                {nav.title}
              </Link>
            ) : (
              <div className="group relative">
                {/* Parent menu item */}
                <span>{nav.title}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavbarGreen;
