// components/RunningText.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";
import localFont from "next/font/local";
import ttsLogo from "../../assets/ttsLogo.jpg";
import Image from "next/image";

export const BackWild = localFont({
  src: [
    {
      path: "../../app/fonts/Back-Wild.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

const RunningText: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y shadow-xl border-y-slate-200 py-7">
      <motion.div
        className="inline-block"
        // Framer Motion animation props
        animate={{ x: ["100%", "-100%"] }} // Moves from right to left
        transition={{
          repeat: Infinity, // Infinite loop
          duration: 30, // Adjust duration to control speed
          ease: "linear", // Constant speed
        }}
      >
        <div
          className={`text-4xl text-red-800 inline-flex mx-auto items-center ${BackWild.className}`}
        >
          <span className="mx-10">TRUMP&apos;S FIGHT FIST ON BASE</span>
          <span>
            <Image
              src={ttsLogo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </span>
          <span className="mx-10">TRUMP&apos;S FIGHT FIST ON BASE</span>
          <span>
            <Image
              src={ttsLogo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </span>
          <span className="mx-10">TRUMP&apos;S FIGHT FIST ON BASE</span>
          <span>
            <Image
              src={ttsLogo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </span>
          <span className="mx-10">TRUMP&apos;S FIGHT FIST ON BASE</span>
          <span>
            <Image
              src={ttsLogo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </span>
          <span className="mx-10">TRUMP&apos;S FIGHT FIST ON BASE</span>
          <span>
            <Image
              src={ttsLogo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </span>
          <span className="mx-10">TRUMP&apos;S FIGHT FIST ON BASE</span>
          <span>
            <Image
              src={ttsLogo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </span>
          <span className="mx-10">TRUMP&apos;S FIGHT FIST ON BASE</span>
          <span>
            <Image
              src={ttsLogo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </span>
          <span className="mx-10">TRUMP&apos;S FIGHT FIST ON BASE</span>
          <span>
            <Image
              src={ttsLogo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </span>
          <span className="mx-10">TRUMP&apos;S FIGHT FIST ON BASE</span>
          <span>
            <Image
              src={ttsLogo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </span>
          <span className="mx-10">TRUMP&apos;S FIGHT FIST ON BASE</span>
          <span>
            <Image
              src={ttsLogo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </span>
          <span className="mx-10">TRUMP&apos;S FIGHT FIST ON BASE</span>
          <span>
            <Image
              src={ttsLogo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </span>
          <span className="mx-10">TRUMP&apos;S FIGHT FIST ON BASE</span>
          <span>
            <Image
              src={ttsLogo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default RunningText;
