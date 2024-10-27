"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ttsLogo from "@/assets/ttsLogo.jpg"; // Replace with your actual icon import

const navLinks = [
  { title: "HOME", path: "/" },
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

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 border-b-2 border-gray-300">
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
          <h1 className="text-sm font-bold text-orange-600 text-wrap">
            <p>TRUMPS FIGHT FIST</p>
          </h1>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex justify-center items-center space-x-10">
        {/* Links */}
        {navLinks.map((nav, index) => (
          <div
            key={index}
            className="px-6 border-r-2 border-gray-300 flex items-center cursor-pointer delay-75 z-50"
          >
            {nav.path ? (
              <Link href={nav.path} passHref className="hover:text-blue-500">
                {nav.title}
              </Link>
            ) : (
              <div className="group relative">
                {/* Parent menu item */}
                <span>{nav.title}</span>
                {/* Submenu */}
                {nav.subTitle && (
                  <ul className="absolute left-0 hidden mt-2 w-40 delay-75 bg-white shadow-lg group-hover:block ">
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
      <div className="flex items-center bg-black text-white px-10 py-4">
        <Link href="/how-to-get-$tts" passHref>
          <div className="flex items-center cursor-pointer">
            <span className="text-xl font-semibold">HOW TO GET</span>
            <span className="ml-1 font-bold text-orange-600">$TTS</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
