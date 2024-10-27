"use client";

// import libraries
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/legacy/image";
import localFont from "next/font/local";

// import assets
import sun from "../../assets/sun.svg";
import cloud01 from "../../assets/cloud_01.svg";
import cloud02 from "../../assets/cloud_02.svg";
import cloud03 from "../../assets/cloud_03.svg";
import whitehouse from "../../assets/white_house.svg";
import land02 from "../../assets/land02.svg";
// import citizen_01 from "../assets/citizen/01.svg";
// import citizen_02 from "../assets/citizen/02.svg";
// import citizen_03 from "../assets/citizen/03.svg";
// import citizen_04 from "../assets/citizen/04.svg";
// import citizen_05 from "../assets/citizen/05.svg";
// import citizen_06 from "../assets/citizen/06.svg";

export const BackWild = localFont({
  src: [
    {
      path: "../../app/fonts/Back-Wild.woff",
      weight: "400",
      style: "normal",
    },
  ],
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

const Hero = () => {
  const { scrollY } = useScroll();

  // Create parallax effects for each element
  const sunY = useTransform(scrollY, [0, 500], [0, 100]);
  const cloud01Y = useTransform(scrollY, [0, 500], [0, 150]);
  const cloud02Y = useTransform(scrollY, [0, 500], [0, 200]);
  const cloud03Y = useTransform(scrollY, [0, 500], [0, 250]);
  const textY = useTransform(scrollY, [0, 500], [0, -100]); // Parallax effect for the text

  return (
    <div className="relative overflow-visible h-screen bg-[linear-gradient(to_bottom,#639CB3,#8DDFFF_35%,#AFE9FF_60%,#F4FCFF_80%)]">
      <div className="relative h-full flex items-center justify-center">
        {/* Reveal Effect for the "FIGHT CLUB" text */}
        <motion.div
          className="text-center font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ y: textY }}
        >
          <motion.h1
            className={`text-white/80 text-[200px] ${BackWild.className}`}
          >
            {renderLetters("FIGHT")}

            {renderLetters("CLUB")}
          </motion.h1>
        </motion.div>

        {/* Parallax Elements */}
        <motion.div
          className="hidden md:block absolute right-[200px] top-[100px]"
          style={{ y: sunY }}
        >
          <Image
            src={sun}
            height={200}
            width={200}
            alt="sun"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute left-[250px] top-[200px]"
          style={{ y: cloud01Y }}
        >
          <Image
            src={cloud01}
            height={200}
            width={200}
            alt="cloud1"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute left-[600px] top-[100px]"
          style={{ y: cloud02Y }}
        >
          <Image
            src={cloud02}
            height={190}
            width={190}
            alt="cloud2"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute right-[200px] top-[100px]"
          style={{ y: cloud03Y }}
          drag
        >
          <Image
            src={cloud03}
            height={500}
            width={500}
            alt="cloud3"
            draggable="false"
          />
        </motion.div>

        {/* Bottom Elements */}
        <div className="absolute bottom-0 left-0 w-full h-auto pointer-events-none">
          <div className="relative">
            <div className="absolute bottom-0 right-0 h-auto z-0">
              <Image src={whitehouse} alt="white house" />
            </div>
            <div className="absolute bottom-0 w-full z-10">
              <Image
                src={land02}
                alt="land2"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Citizens - Positioned Between land02 and whitehouse */}
      {/* <div
        id="citizen"
        className="absolute w-full grid grid-cols-7 items-end gap-4 px-4 z-5 pointer-events-none"
        style={{ bottom: "30px" }} // Adjusted bottom position
      > */}
      {/* Left Side */}
      {/* <div className="col-span-1 flex justify-center">
          <Image
            src={citizen_01}
            height={250}
            width={250}
            alt="citizen_01"
            className="border border-white/70 rounded-full"
          />
        </div>
        <div className="col-span-1 flex justify-center">
          <Image
            src={citizen_02}
            height={250}
            width={250}
            alt="citizen_02"
            className="border border-white/70 rounded-full"
          />
        </div>
        <div className="col-span-1 flex justify-center">
          <Image
            src={citizen_03}
            height={250}
            width={250}
            alt="citizen_03"
            className="border border-white/70 rounded-full"
          />
        </div> */}

      {/* Empty Middle Column */}
      {/* <div className="col-span-1"></div> */}

      {/* Right Side */}
      {/* <div className="col-span-1 flex justify-center">
          <Image
            src={citizen_04}
            height={250}
            width={250}
            alt="citizen_04"
            className="border border-white/70 rounded-full scale-x-[-1]"
          />
        </div>
        <div className="col-span-1 flex justify-center">
          <Image
            src={citizen_05}
            height={250}
            width={250}
            alt="citizen_05"
            className="border border-white/70 rounded-full scale-x-[-1]"
          />
        </div>
        <div className="col-span-1 flex justify-center">
          <Image
            src={citizen_06}
            height={250}
            width={250}
            alt="citizen_06"
            className="border border-white/70 rounded-full scale-x-[-1]"
          />
        </div> 
       </div> */}
    </div>
  );
};

export default Hero;
