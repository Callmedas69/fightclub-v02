import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import onBase from "@/assets/homepage/OnBase.png";
import bigLogo from "@/assets/homepage/TTS_Logo_Large.png";

const Naratives = () => {
  return (
    <div className="relative bg-[#120026]">
      <div className="grid grid-cols-2 py-16">
        <div className="flex justify-end items-end pr-10">
          <Image src={bigLogo} alt="Big Logo" />
        </div>
        <div className="flex flex-col text-white">
          <div className="font-bold text-6xl w-[60%]">
            WHAT DOES TTS<span> STAND FOR ?</span>
          </div>
          <div className="w-[60%] text-xl">
            <p className="pt-5 leading-relaxed">
              TTS, a.k.a Trump&#39;s Fight Fist, stands for US! THE PEOPLE! All
              over the world. For our struggle against the Deep State and
              military greed. It is really-cry to FIGHT the rigged world and
              elites who try to hold us bas and put us down
            </p>
            <p className="pt-5 leading-relaxed">
              They think they can intimidate us, silence us, take away our
              rights, our ability to think, and our courage to speak freely.
              They&#39;re wrong! We&#39;ll fight them all the way!!!
            </p>
          </div>
          <div className="flex flex-row gap-10 pt-10">
            <div>
              <Button className="bg-yellow-500 rounded-none text-2xl text-black font-semibold px-10 py-7 hover:bg-red-600 hover:text-white hover:shadow-2xl hover:shadow-orange-300">
                HOW TO BUY $TTS
              </Button>
            </div>
            <div>
              <Image src={onBase} alt="Base" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Naratives;
