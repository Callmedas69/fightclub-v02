"use client";

import React from "react";
import Image from "next/image";
import leader1 from "@/assets/citizen/01.svg";
import leader2 from "@/assets/citizen/02.svg";
import leader3 from "@/assets/citizen/03.svg";
import leader4 from "@/assets/citizen/04.svg";
import leader5 from "@/assets/citizen/05.svg";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const teamList = [
  {
    name: "Blackswan",
    position: "Co-Founder / COO",
    photo: leader1,
  },
  {
    name: "Mr-Green",
    position: "Co-Founder / COO",
    photo: leader2,
  },
  {
    name: "0xD",
    position: "Tech Lead",
    photo: leader3,
  },
  {
    name: "Barret",
    position: "A.I Alchemist",
    photo: leader4,
  },
  {
    name: "D Man",
    position: "Special Advisor",
    photo: leader5,
  },
];

const Team = () => {
  return (
    <div className="relative bg-[#120026] py-20">
      <div className="flex flex-col mx-auto justify-center items-center text-white text-center w-[60%]">
        <div className="font-bold text-6xl">
          MEET THE <span className="text-orange-400">TEAM</span>
        </div>
        <div className="pt-5 w-[80%]">
          <p className="text-center text-xl leading-relaxed">
            Trusted and dedicated members themselves, MrGreen & Blackswan come
            from the 350k strong Blockchain Whispers community. Both with
            several years of high-rank within the community we chosen by D Man.,
            the BCW Founder to lead the FIGHT!
          </p>
        </div>
        <div className="flex flex-row gap-5 py-10">
          {teamList.map((team, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <Card key={index} className="hover:shadow-xl hover:shadow-white">
                <CardContent className="pt-5 pb-0 bg-[#120026]">
                  <Image src={team.photo} alt={team.name} />
                </CardContent>
                <CardFooter className="flex flex-col bg-[#d9d9d9] text-[#050505]">
                  <CardTitle>
                    <p className="font-semibold text-xl pt-5">{team.name}</p>
                  </CardTitle>
                  <p className="text-sm">{team.position}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="w-[80%]">
          <p className="text-center text-xl leading-relaxed">
            The overall TTS team consists of 14 members covering Operations,
            Social Media, Marketing, and Community Development. We&#39;re always
            on the look out for extra help, so keep an eye on our TG for future
            opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
