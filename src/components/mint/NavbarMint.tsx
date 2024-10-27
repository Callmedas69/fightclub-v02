"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ttsLogo from "@/assets/ttsLogo.jpg"; // Replace with your actual icon import
import CustomConnectButton from "./connectWallet3rd";

const navLinks = [
  { title: "HOME", path: "/home" },
  { title: "MINT", path: "/mint" },
  { title: "SWAP", path: "/swap" },
  { title: "ART ROOM", path: "/showroom" },
  {
    title: "TOOLS",
    subTitle: [
      { title: "GAMES", path: "/games" },
      { title: "STAKE", path: "/stake" },
      { title: "STOODIO", path: "/stoodio" },
    ],
  },
  { title: "FAQ", path: "/faq" },
];

const NavbarMint = () => {
  return (
    <nav className="flex items-center justify-between bg-white h-20 w-full border-b-2 border-gray-300 px-6">
      {/* Left Section */}
      <div className="flex items-center">
        {/* Icon */}
        <div className="border-r-2 border-gray-300 px-4">
          <Image
            src={ttsLogo}
            alt="TTS Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        {/* Logo Text */}
        <div className="px-6 border-r-2 border-gray-300">
          <h1 className="text-sm font-bold text-orange-600">
            TRUMPS FIGHT FIST
          </h1>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex justify-center items-center space-x-10">
        {/* Links */}
        {navLinks.map((nav, index) => (
          <div
            key={index}
            className="px-6 border-r-2 border-gray-300 flex items-center cursor-pointer z-50"
          >
            {nav.path ? (
              <Link href={nav.path} className="hover:text-blue-500">
                {nav.title}
              </Link>
            ) : (
              <div className="group relative">
                {/* Parent menu item */}
                <span className="hover:text-blue-500">{nav.title}</span>
                {/* Submenu */}
                {nav.subTitle && (
                  <ul className="absolute left-0 hidden mt-2 w-40 bg-white shadow-lg group-hover:block group-hover:delay-150 group-hover:duration-300">
                    {nav.subTitle.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={sub.path}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex justify-end">
        <div className="wallet-container">
          <CustomConnectButton />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMint;
