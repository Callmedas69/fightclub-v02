"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import underground from "../../assets/under-ground.svg";
import Image from "next/legacy/image";

export const BackWild = localFont({
  src: [
    {
      path: "../../app/fonts/Back-Wild.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export const Gunterz = localFont({
  src: [
    {
      path: "../../app/fonts/Gunterz-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const MintInfo = () => {
  const mintInfo = [
    {
      title: "SUPPLY",
      desc: "2,112",
    },
    {
      title: "MINT PRICE",
      desc: "0.0009 ETH",
    },
    {
      title: "DATE",
      desc: "Nov 11, 2024",
    },
    {
      title: "CHAIN",
      desc: "Base",
    },
  ];

  return (
    <div className="relative" id="mint-info">
      {/* Full-width underground image */}
      <div className="absolute top-0 left-0 w-full">
        <Image src={underground} alt="underground" sizes="100vw" />
      </div>

      {/* Constrained content */}
      <div className="max-w-[1200px] mx-auto items-center relative z-10">
        <h1 className="tracking-wider text-center text-[7rem] text-white mx-auto font-semibold pt-40">
          <p className={BackWild.className}>
            MINT<span className="text-orange-400">info </span>
          </p>
        </h1>

        <div className="flex flex-row grid grid-cols-2 mt-10 gap-8 text-white">
          {mintInfo.map((mint, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                scale: 1.1,
              }}
              key={index}
              className="bg-white/10 rounded-3xl"
            >
              <motion.div
                className="p-4 text-center p-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h1 className={`text-lg ${Gunterz.className}`}>{mint.title}</h1>
                <h2 className="font-semibold text-5xl">{mint.desc}</h2>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mint Button */}
      <div className="flex items-center justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#FF6347", color: "#FFF" }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg text-[2rem]"
        >
          <a href="../mint" target="blank">
            MINT HERE
          </a>
        </motion.button>
      </div>
    </div>
  );
};

export default MintInfo;
