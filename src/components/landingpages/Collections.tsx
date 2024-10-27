"use client";

import { motion } from "framer-motion";
import Image from "next/legacy/image";
import localFont from "next/font/local";
import Citizen_01 from "../../assets/citizen/01.svg";
import Citizen_02 from "../../assets/citizen/02.svg";
import Citizen_03 from "../../assets/citizen/03.svg";
import Citizen_04 from "../../assets/citizen/04.svg";
import Citizen_05 from "../../assets/citizen/05.svg";
import Citizen_06 from "../../assets/citizen/06.svg";
import Citizen_07 from "../../assets/citizen/07.svg";
import Citizen_08 from "../../assets/citizen/08.svg";
import Citizen_09 from "../../assets/citizen/01.svg";
import Citizen_10 from "../../assets/citizen/02.svg";

const images = [
  Citizen_01,
  Citizen_02,
  Citizen_03,
  Citizen_04,
  Citizen_05,
  Citizen_06,
  Citizen_07,
  Citizen_08,
  Citizen_09,
  Citizen_10,
];

export const BackWild = localFont({
  src: [
    {
      path: "../../app/fonts/Back-Wild.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

const Collections = () => {
  return (
    <div
      id="collections"
      className="text-center mt-40 text-[7rem] text-white mb-40 tracking-wider"
    >
      <h1 className={BackWild.className}>
        the<span className="text-orange-400">Collections</span>
      </h1>
      <div className="max-w-[1200px] mx-auto pt-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-full h-64 relative overflow-hidden"
            >
              <div className="border border-gray-80 rounded-lg">
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
