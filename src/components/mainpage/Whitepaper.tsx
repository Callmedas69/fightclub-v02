"use client";

import React from "react";
import bgWhitePaper from "../../assets/whitepaper/bg-whitepaper.svg";
import whitePaper1 from "../../assets/whitepaper/whitepaper1.svg";
import whitePaper2 from "../../assets/whitepaper/whitepaper2.svg";
import whitePaper3 from "../../assets/whitepaper/whitepaper3.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import CloudContractAddress from "./contractaddress";

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

const FloatingPaper1 = () => {
  return (
    <motion.div
      className="floating-image absolute z-10 top-[45%] left-[15%]"
      variants={floatingAnimation}
      initial="initial"
      animate="animate"
    >
      <Image src={whitePaper1} alt="Tax" width={300} height={300} />
    </motion.div>
  );
};

const FloatingPaper2 = () => {
  return (
    <motion.div
      className="floating-image absolute z-10 top-[8%] left-[16%]"
      variants={floatingAnimation}
      initial="initial"
      animate="animate"
    >
      <Image src={whitePaper2} alt="Locked LP" width={300} height={300} />
    </motion.div>
  );
};

const FloatingPaper3 = () => {
  return (
    <motion.div
      className="floating-image absolute z-10 top-[19%] right-[15%]"
      variants={floatingAnimation}
      initial="initial"
      animate="animate"
    >
      <Image src={whitePaper3} alt="Supply" width={300} height={300} />
    </motion.div>
  );
};

const Whitepaper = () => {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src={bgWhitePaper}
        alt="Background"
        layout="fill" // Ensures the image takes up the entire space of the parent container
        objectFit="cover" // Ensures the image covers the entire container
        objectPosition="center" // Centers the image within the container
        quality={100} // Optional: Sets the image quality
      />
      <FloatingPaper1 />
      <FloatingPaper2 />
      <FloatingPaper3 />
      <div className="relative flex w-screen h-screen justify-center items-center z-10 ">
        <CloudContractAddress
          contractName="TTS"
          contractAddress="0x7d83b9d9236a97bb3f0d7804e9824445fc483ae1"
        />
      </div>
    </div>
  );
};

export default Whitepaper;
