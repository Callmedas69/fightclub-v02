"use client";

// import { Clouds } from "../web-ui/Clouds";
import React from "react";
import Capitol from "../../assets/mainpage/the-capitol.svg";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import localFont from "next/font/local";
import { Chewy } from "next/font/google";
import ttsUniswap from "../../assets/social/uni.svg";
import ttsChart from "../../assets/social/chart.svg";
import ttsTele from "../../assets/social/tele.svg";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const BackWild = localFont({
  src: [
    {
      path: "../../app/fonts/Back-Wild.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

const chewy = Chewy({
  weight: ["400"], // Specify the weights you need
  subsets: ["latin"], // Choose the subsets
  display: "swap", // Optional: specify display strategy
});

// Helper function to render each letter with a hover effect
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

const floatingAnimation = {
  initial: { y: 0 }, // Initial position
  animate: {
    y: [0, -20, 0], // Moves up and down to create a floating effect
    transition: {
      duration: 2, // Duration of one complete cycle
      repeat: Infinity, // Loop animation infinitely
      ease: "easeInOut", // Smooth transition
    },
  },
};

const FloatingImage = () => {
  return (
    <motion.div
      className="floating-image absolute z-10 top-[30%] left-[7%]"
      variants={floatingAnimation}
      initial="initial"
      animate="animate"
    >
      <Image src={Capitol} alt="capitol" width={150} height={150} />
    </motion.div>
  );
};

const ttsSocial = [
  {
    title: "CHART",
    path: "https://dexscreener.com/base/0xc85af4a37edefb27b9449ac71b93ad76d59d145f",
    icon: ttsChart,
    styling: "hover:shadow-orange-400",
  },
  {
    title: "TELEGRAM",
    path: "https://t.me/+CjzwzintOdJjNGNi",
    icon: ttsTele,
    styling: "hover:shadow-blue-400",
  },
  {
    title: "UNISWAP",
    path: "https://app.uniswap.org/explore/tokens/base/0x7d83b9d9236a97bb3f0d7804e9824445fc483ae1",
    icon: ttsUniswap,
    styling: "hover:shadow-pink",
  },
];

const Hero01 = () => {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, -100]); // Parallax effect for the text

  // const parallaxRef = useRef(null);

  return (
    <div className="relative overflow-visible h-screen bg-[linear-gradient(to_bottom,#639CB3,#8DDFFF_35%,#F4FCFF_60%,#FFFFFF)]">
      <div className="container mx-auto p-0 space-y-6 flex items-center justify-center flex-col text-center relative z-20">
        <motion.div
          className="text-center font-bold"
          layout="position"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ y: textY }}
        >
          <motion.h1
            className={`text-white space-x-2 text-[300px] ${BackWild.className}`}
          >
            {renderLetters("$TTS")}
          </motion.h1>
        </motion.div>

        <TypeAnimation
          sequence={["make", 1000, "meme", 1000, "great", 1000, "again", 1000]}
          className={`text-5xl text-red-950 inline-block font-extrabold ${chewy.className}`}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
        />

        <TypeAnimation
          sequence={[
            "cry out to FIGHT against the rigged world",
            1000,
            "and to the elites who try to hold us back",
            1000,
            "and put us down",
            1000,
          ]}
          className={`text-xl text-emerald-600 inline-block font-extrabold ${chewy.className}`}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
        />
      </div>
      <FloatingImage />
      <div className="flex justify-center items-center pt-20 bg-transparent">
        <div className="flex flex-row gap-8">
          {ttsSocial.map((social, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              <TooltipProvider>
                <Tooltip>
                  <ul>
                    <li>
                      <TooltipTrigger>
                        <Link href={social.path} target="blank">
                          <Image
                            src={social.icon}
                            alt={social.title}
                            width={75}
                            height={75}
                          />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent className="bg-transparent text-slate-950">
                        {social.title}
                      </TooltipContent>
                    </li>
                  </ul>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero01;
