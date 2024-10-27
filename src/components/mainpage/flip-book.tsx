"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import useMediaQuery from "react-responsive";

export const BackWild = localFont({
  src: [
    {
      path: "../../app/fonts/Back-Wild.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

const pages = [
  {
    left: {
      title: "How to Get",
      subtitle: "$TTS",
      pageNumber: 1,
    },
    right: {
      title: "INTRODUCTION",
      content: [
        "TTS is on Base The Layer 2 blockchain by Coinbase.",
        "You'll need to add Base Network to your wallet and bridge ETH in order to come over!",
        "It's very easy and we'll guide you through it in a few simple steps!",
      ],
      pageNumber: 2,
    },
  },
  {
    left: {
      title: "STEP 1",
      content: [
        "Go to 'Settings' in your wallet and find the networks section.",
        "Add a network manually and enter the following info for Base:",
        "Network Name: Base",
        "RPC Endpoint: https://mainnet.base.org",
        "Chain ID: 8453",
        "Currency Symbol: ETH",
        "Block Explorer: https://basescan.org",
        "CONNECT TO BASE",
        "Once saved, you should be able to connect to Base by selecting it from the network selection menu.",
      ],
      pageNumber: 3,
    },
    right: {
      title: "STEP 2",
      content: [
        "Now you'll need to deposit some ETH onto Base! Here you have a couple options:",
        "1. Withdraw ETH to your Base wallet from Coinbase, Binance, Byit or OKX Make sure to select Base as the withdrawal network!",
        "2. Bridge ETH to Base from another chain using these bridges:",
        " - {link:Official Base Bridge:https://bridge.base.org/deposit}",
        " - {link:Relay Link:https://relay.link}",
        " - {link:Orbiter:https://www.orbiter.finance/}",
        " - {link:Stargate:https://stargate.finance/}",
        "To use these bridges simply connect your wallet, select the network you want to bridge from, choose Base as the network to bridge to, and input the amount of ETH you would like to bridge!",
      ],
      pageNumber: 4,
    },
  },
  {
    left: {
      title: "STEP 3",
      content: [
        "1. In your wallet, switch the network to Base in the network dropdown menu",
        "2. Go to {link:UNISWAP:https://app.uniswap.org/explore/tokens/base/0x7d83b9d9236a97bb3f0d7804e9824445fc483ae1}",
        "3. Connect your wallet",
        "4. In the bottom swap field, select a token and input the official $TTS token address 0x7D83B9D9236a97bB3f0d7804E9824445Fc483aE1",
      ],
      pageNumber: 5,
    },
    right: {
      title: "STEP 4",
      content: [
        "Perform the swap.",
        "1. Enter an amount of ETH",
        "2. Set the slippage to 3-4% by clicking on the settings wheel and adjusting it",
        "3. Press Swap",
        "4. Confirm the transaction in your wallet",
      ],
      pageNumber: 6,
    },
  },
];

const parseLink = (text: string) => {
  const linkMatch = text.match(/\{link:(.*?):(.*?)\}/);
  if (linkMatch) {
    const [, linkText, linkHref] = linkMatch;
    const beforeLink = text.split("{link:")[0];
    return (
      <React.Fragment key={text}>
        {beforeLink}
        <a
          href={linkHref}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      </React.Fragment>
    );
  }
  return text;
};

const PageContent = ({
  data,
}: {
  data: {
    title: string;
    subtitle?: string;
    subsubtitle?: string;
    content?: string[];
    pageNumber: number;
  };
}) => {
  const content = useMemo(
    () =>
      data.content?.map((item, index) => {
        return (
          <p key={index} className="mb-2 text-sm text-wrap">
            {item.includes("{link:") ? parseLink(item) : item}
          </p>
        );
      }),
    [data.content]
  );

  return (
    <div className="w-full h-full bg-white p-8 flex flex-col justify-between">
      <div className="overflow-y-auto flex-grow">
        {data.subtitle ? (
          <div className={`mt-8 ${BackWild.className} my-auto`}>
            <h1 className="text-7xl tracking-wider leading-tight">
              {data.title}
              <br />
              <span className="text-orange-500">{data.subtitle}</span>
            </h1>
            <p className="text-3xl font-bold mt-2">{data.subsubtitle}</p>
          </div>
        ) : (
          <div>
            <h2
              className={`text-3xl font-bold mb-4 tracking-wider ${BackWild.className}`}
            >
              {data.title}
            </h2>
            {content}
          </div>
        )}
      </div>
      <div className="text-center text-gray-400 text-sm mt-4">
        PAGE {data.pageNumber}
      </div>
    </div>
  );
};

export default function Flipbook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState(false);

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !flipping) {
      setFlipping(true);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !flipping) {
      setFlipping(true);
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-emerald-300 p-4">
      <div
        className={`relative ${
          isSmallScreen ? "w-[90%]" : "w-[1100px]"
        } h-[500px]`}
      >
        <div className="absolute w-full h-full flex shadow-3xl">
          <motion.div
            className="w-1/2 h-full rounded-3xl overflow-hidden border border-black"
            initial={{ opacity: 1, rotateY: 0 }}
            animate={{
              opacity: 1,
              rotateY: flipping ? -180 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              transformOrigin: "right",
              backfaceVisibility: "hidden",
            }}
          >
            <PageContent data={pages[currentPage].left} />
          </motion.div>
          <motion.div
            className="w-1/2 h-full rounded-3xl overflow-hidden absolute top-0 right-0 border border-black"
            initial={{ opacity: 1, rotateY: 0 }}
            animate={{
              opacity: 1,
              rotateY: flipping ? -180 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onAnimationComplete={() => setFlipping(false)}
            style={{
              transformOrigin: "left",
              backfaceVisibility: "hidden",
            }}
          >
            <PageContent data={pages[currentPage].right} />
          </motion.div>
        </div>
        <div
          className="absolute top-0 left-0 w-1/2 h-full bg-white rounded-3xl shadow-md"
          style={{ zIndex: -1 }}
        />
        <Button
          onClick={prevPage}
          disabled={currentPage === 0 || flipping}
          className="absolute top-1/2 -left-16 transform -translate-y-1/2"
          aria-label="Previous Page"
        >
          <ChevronLeft size={24} />
        </Button>
        <Button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1 || flipping}
          className="absolute top-1/2 -right-16 transform -translate-y-1/2"
          aria-label="Next Page"
        >
          <ChevronRight size={24} />
        </Button>
      </div>
    </div>
  );
}
