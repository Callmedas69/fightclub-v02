import React from "react";
import { Button } from "../ui/button";
import localFont from "next/font/local";
import Image from "next/image";
import bacteria01 from "../../assets/mainpage/bacteria-green-01.svg";
import bacteria02 from "../../assets/mainpage/bacteria-green-02.svg";
import bacteria03 from "../../assets/mainpage/bacteria-orange.svg";
import baldForest from "../../assets/mainpage/bald-forest.svg";
import polution from "../../assets/mainpage/polution.svg";
import radioactive from "../../assets/mainpage/radioactive.svg";
import OxD from "../../assets/team/0xD.png";

export const BackWild = localFont({
  src: [
    {
      path: "../../app/fonts/Back-Wild.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

const Hero02 = () => {
  return (
    <div className="relative overflow-visible h-screen bg-[#810027]">
      <div className="grid grid-cols-2 justify-center items-center h-screen w-full border border-white">
        {/* THE FIGHT */}
        <div className="relative flex justify-end items-end">
          <div className="flex flex-col w-[80%] justify-end">
            <div className="border border-white text-center text-white pt-10 pb-5">
              <p>TTS PRESENT</p>
              <p className="font-bold text-2xl">THE</p>
              <p
                className={`text-[90px] font-bold -top-1 ${BackWild.className}`}
              >
                FIGHT !
              </p>
              <p className="font-bold text-lg">NFT COLLECTION</p>
              <p className="text-sm">LAUNCH EARLY NOVEMBER 2024</p>
            </div>
            <div className="flex justify-center items-center border border-white ">
              <Button className="bg-yellow-500 rounded-3xl text-black font-semibold">
                MORE INFO
              </Button>
            </div>
          </div>
        </div>
        {/* skewed image */}
        <div className="grid grid-cols-3 text-white text-center">
          {/* LEFT IMAGE */}
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="border-8 border-white p-3 skew-y-3">
              <Image
                src={bacteria01}
                alt="bacteria1"
                width={100}
                height={100}
              />
            </div>
            <div className="border-8 border-white p-3">
              <Image
                src={bacteria02}
                alt="bacteria2"
                width={100}
                height={100}
              />
            </div>
            <div className="border-8 border-white p-3">
              <Image
                src={bacteria03}
                alt="bacteria3"
                width={100}
                height={100}
              />
            </div>
          </div>
          {/* CENTER IMAGE */}
          <div className="relative h-full">
            <div className="absolute bottom-0 w-full flex justify-center">
              <Image src={OxD} alt="OxD" sizes="120vh" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex flex-col justify-center items-center gap-5 ">
            <div className="border-8 border-white p-3">
              <Image src={baldForest} alt="forest" width={100} height={100} />
            </div>
            <div className="border-8 border-white p-3">
              <Image src={polution} alt="polution" width={100} height={100} />
            </div>
            <div className="border-8 border-white p-3">
              <Image src={radioactive} alt="radio" width={100} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero02;
