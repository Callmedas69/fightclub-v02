"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import addBase from "@/assets/howto/add-base-chain.jpeg";
import bridgeBase from "@/assets/howto/base-bridge.jpeg";
import uniswap from "@/assets/howto/uniswap.svg";
import mmWallet from "@/assets/howto/metamask.svg";
import localFont from "next/font/local";

export const BackWild = localFont({
  src: [
    {
      path: "../../app/fonts/Back-Wild.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

const renderLetters = (text: string) => {
  return Array.from(text).map((char, index) => (
    <motion.span
      key={index}
      whileHover={{ scale: 1.2, color: "#FF6347" }} // Scale up and change color on hover
      transition={{ type: "spring", stiffness: 300 }}
      className="inline-block"
    >
      {char}
    </motion.span>
  ));
};

const howTo = [
  {
    id: "1",
    title: "TLDR",
    desc1: "Fund you DEX Wallet",
    desc2: "Add Base Chain",
    desc3: "Bridge to Base Chain",
    desc4: "Buy $TTS from DEX",
    desc5: "Buy $TTS from Wallet",
  },
  {
    id: "2",
    title: "FUND YOUR DEX WALLET",
    desc1:
      "Deposit funds to your CEX (Centralized Exchange) using BankAccount, Visa, or Master Card, such as Binance, Kraken, etc.",
    desc2: "Buy ETH on CEX with your preferable amount",
    desc3:
      "Send your fund to your DEX Wallet (i.e Metamask, Rainbow, Rabby, Zerion, TW, etc)",
    desc4:
      "Before sending your fund, make sure to choose BASE CHAIN (if your CEX support it)",
    desc5:
      "If your CEX not support Base yeet, send your via another L2 (Optimism or Arbitrum), we will bridge after",
  },
  {
    id: "3",
    title: "ADD BASE CHAIN",
    desc1: "Go to CHAINLIST.ORG",
    desc2: "Connect your wallet",
    desc3: "Search for BASE",
    desc4: "Add to Metamask",
    desc5: "Sign",
    imageSrc: addBase,
  },
  {
    id: "4",
    title: "BRIDGE TO BASE",
    desc1:
      "Choose a dapp to bridge superbridge.app Owlto.finance, or Relay.link",
    desc2: "Connect your wallet",
    desc3: "Choose your origin network (FROM)",
    desc4: "Choose BASE CHAIN (TO)",
    desc5: "Enter your Amount - send - and sign",
    imageSrc: bridgeBase,
  },
  {
    id: "5",
    title: "BUY FROM DEX",
    desc1: "Go to app.uniswap.org/swap",
    desc2: "Connect your wallet",
    desc3: "Choose BASE CHAIN",
    desc4:
      "Click on SELECT TOKEN, and paste the CONTRACT ADDRESS of $TT (0x7D83B9D9236a97bB3f0d7804E9824445Fc483aE1)",
    desc5: "Enter your desired amount - Buy and Sign",
    imageSrc: uniswap,
  },
  {
    id: "6",
    title: "BUY FROM WALLET",
    desc1: "Open your wallet",
    desc2: "Change the network into Base Chain",
    desc3: "Click on SWAP",
    desc4:
      "Paste the CONTRACT ADDRESS of $TTS(0x7D83B9D9236a97bB3f0d7804E9824445Fc483aE1)",
    desc5: "Enter your desired amount - Buy and Sign",
    imageSrc: mmWallet,
  },
];

const Howtobuy = () => {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, -100]); // Parallax effect for the text

  const [isOpen, setIsOpen] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center mt-20">
      {/* Title */}
      <div className="w-[300px] md:w-[1100px] text-center">
        <motion.div
          className="text-center font-bold"
          layout="position"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ y: textY }}
        >
          <motion.h1
            className={`text-blue-600 space-x-2 text-[100px] ${BackWild.className}`}
          >
            {renderLetters("HOW  TO  BUY  $TTS")}
          </motion.h1>
        </motion.div>
        <div className="italic mb-5 mt-2">
          <p>$TTS is on Base The Layer 2 blockchain by Coinbase.</p>
          <p>
            You’ll need to add Base Network to your wallet and bridge ETH in
            order to come over!
          </p>
          <p>
            It’s very easy and we’ll guide you through it in a few simple steps!
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col grid-cols-1 mx-auto md:flex-row text-black/60 items-center w-[300px] md:w-[1100px]">
        <div className="flex flex-row space-y-3 gap-5 border border-gray-500 mx-auto md:flex-row text-black/60 rounded-3xl  p-12 justify-between items-center w-[300px] md:w-[1100px]">
          {howTo.map((how) => (
            <motion.div
              key={how.id}
              transition={{ layout: { duration: 1, type: "spring" } }}
              layout
              onClick={() => setIsOpen(how.id === isOpen ? null : how.id)}
              style={{ borderRadius: "1rem" }}
            >
              <motion.h2
                layout="position"
                className="font-bold text-xl text-center hover:text-emerald-300"
              >
                {how.title}
              </motion.h2>
              {isOpen === how.id && (
                <motion.div className="pt-1 leading-8 mt-5 w-30">
                  <ul className="list-disc px-10 mb-10">
                    <li>{how.desc1}</li>
                    <li>{how.desc2}</li>
                    <li>{how.desc3}</li>
                    <li>{how.desc4}</li>
                    <li>{how.desc5}</li>
                  </ul>
                  <Image
                    src={how.imageSrc}
                    alt=""
                    width={500}
                    className="border border-slate-300 rounded-xl p-2"
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Howtobuy;

//  md:flex-row text-black/60 rounded-3xl  p-12 justify-between items-start mb-24 w-[300px] md:w-[1100px] sticky top-28
