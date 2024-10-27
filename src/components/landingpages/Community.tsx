"use client";

import localFont from "next/font/local";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import twit from "../../assets/social/twitter.png";
import telegram from "../../assets/social/telegram.png";
import web from "../../assets/social/website.png";
import land02 from "../../assets/land02.svg";
import city from "../../assets/city_landscape.svg";
import liberty from "../../assets/liberty.svg";
import Citizen01 from "../../assets/citizen/01.svg";
import Citizen02 from "../../assets/citizen/02.svg";
import Citizen03 from "../../assets/citizen/03.svg";
import Citizen04 from "../../assets/citizen/04.svg";
import Citizen05 from "../../assets/citizen/05.svg";
import Citizen06 from "../../assets/citizen/06.svg";

export const Gunterz = localFont({
  src: [
    {
      path: "../../app/fonts/Gunterz-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const offLink = [
  {
    title: "WEBSITE",
    address: "https://www.fightingfist.com",
    icon: web,
  },
  {
    title: "TWITTER",
    address: "https://x.com/TrumpsFightFist",
    icon: twit,
  },
  {
    title: "TELEGRAM",
    address: "https://t.me/+CjzwzintOdJjNGNi",
    icon: telegram,
  },
];

const Community = () => {
  return (
    <div id="community" className="relative h-[80vh] bg-white overflow-hidden">
      {/* Background Images */}
      <div className="absolute bottom-0 w-full z-0 opacity-10">
        <Image src={city} alt="city" sizes="100vw" />
      </div>
      <div className="absolute bottom-0 inset-0 z-0 opacity-10">
        <Image src={liberty} alt="liberty" />
      </div>
      <div className="absolute bottom-0 w-full z-10">
        <Image src={land02} alt="land02" sizes="100vw" />
      </div>

      {/* Centered Text and Icons */}
      <div className="relative flex flex-col items-center justify-center h-full z-20 text-center text-black/60">
        <h1 className={`text-[7rem] ${Gunterz.className}`}>
          <p>BE A</p>
          <p className="mt-[-70px] text-orange-400">FIGHTER</p>
        </h1>

        <div className="flex flex-row justify-center gap-4 mt-8">
          {offLink.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href={link.address} target="_blank" rel="noopener noreferrer">
                <Image
                  src={link.icon}
                  alt={link.title}
                  height={50}
                  width={50}
                />
              </a>
            </motion.div>
          ))}
        </div>
        <div>
          <motion.div className="absolute left-[500px] top-[500px]" drag>
            <Image
              src={Citizen01}
              height={135}
              width={135}
              alt="Citizen 01"
              draggable="false"
              className="border border-gray/50 rounded-full"
            />
          </motion.div>
          <motion.div className="absolute left-[350px] top-[350px]" drag>
            <Image
              src={Citizen02}
              height={135}
              width={135}
              alt="Citizen 02"
              draggable="false"
              className="border border-gray/50 rounded-full"
            />
          </motion.div>
          <motion.div className="absolute left-[650px] top-[200px]" drag>
            <Image
              src={Citizen03}
              height={135}
              width={135}
              alt="Citizen 03"
              draggable="false"
              className="border border-gray/50 rounded-full"
            />
          </motion.div>
          <motion.div
            className="absolute right-[350px] top-[500px] scale-x-[-1]"
            drag
          >
            <Image
              src={Citizen04}
              height={135}
              width={135}
              alt="Citizen 04"
              draggable="false"
              className="border border-gray/50 rounded-full"
            />
          </motion.div>
          <motion.div
            className="absolute right-[500px] top-[350px] scale-x-[-1]"
            drag
          >
            <Image
              src={Citizen05}
              height={135}
              width={135}
              alt="Citizen 05"
              draggable="false"
              className="border border-gray/50 rounded-full"
            />
          </motion.div>
          <motion.div
            className="absolute right-[650px] top-[200px] scale-x-[-1]"
            drag
          >
            <Image
              src={Citizen06}
              height={135}
              width={135}
              alt="Citizen 06"
              draggable="false"
              className="border border-gray/50 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Community;
