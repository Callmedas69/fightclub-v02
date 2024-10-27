"use client";

import localFont from "next/font/local";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import dman from "../../assets/team/DMan.png";
import bswan from "../../assets/team/BSwan.png";
import green from "../../assets/team/Green.png";
import oxd from "../../assets/team/0xD.png";

export const BackWild = localFont({
  src: [
    {
      path: "../../app/fonts/Back-Wild.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

const theTeam = [
  {
    src: dman,
    name: "D Man",
    position: "Advisor",
  },
  {
    src: bswan,
    name: "BlackSwan",
    position: "Chief",
  },
  {
    src: green,
    name: "Mr.Green",
    position: "Picasso",
  },
  {
    src: oxd,
    name: "0xD",
    position: "Technician",
  },
];

const Team = () => {
  return (
    <div
      id="team"
      className="bg-[linear-gradient(to_top,#fff,#F4FCFF_35%,#8DDFFF_60%)]"
    >
      <div className="text-black/60 w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2
          className={`tracking-wider text-[7rem] font-bold mb-4 mt-20 ${BackWild.className}`}
        >
          MEET <span className="text-orange-400">THE TEAM</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {theTeam.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="h-auto w-[200px] flex flex-col justify-between items-center bg-white/80 p-4 rounded-xl"
            >
              <div className="h-auto w-auto object-cover border border-gray/80 rounded-xl">
                <Image
                  src={team.src}
                  width={180}
                  height={180}
                  alt={team.name}
                />
              </div>
              <div className="mt-5">
                <h1 className="font-semibold text-2xl">{team.name}</h1>
                <p className="mt-1 italic">{team.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
