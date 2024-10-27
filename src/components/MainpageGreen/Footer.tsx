import React from "react";
import twitterX from "@/assets/homepage/twitter.png";
import telegram from "@/assets/homepage/telegram.png";
import Image from "next/image";
import Link from "next/link";

const communityList = [
  {
    title: "X",
    img: twitterX,
    path: "",
  },
  {
    title: "Telegram",
    img: telegram,
    path: "",
  },
];

const Footer = () => {
  return (
    <div className="relative bg-[#324c9b]">
      <div className="flex flex-row px-20 py-8 text-2xl justify-between">
        <div className="flex flex-row gap-5">
          {communityList.map((community, index) => (
            <div key={index}>
              <Link href={community.path}>
                <Image
                  src={community.img}
                  alt={community.title}
                  width={50}
                  height={50}
                  className="bg-white rounded-lg"
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-white font-bold items-center justify-center">
          JOIN THE FIGHT ACROSS X & TG + WIN NFT
        </div>
      </div>
    </div>
  );
};

export default Footer;
