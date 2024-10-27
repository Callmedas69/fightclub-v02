import SwapComponents from "@/components/swap/swapComponents";
import React from "react";
import land from "../../../assets/land02.svg";
import Image from "next/image";
import NavbarSwap from "@/components/swap/NavbarSwap";

const swapPage = () => {
  return (
    <div className="relative w-full h-screen">
      <nav className="fixed top-0 left-0 right-0 z-30">
        <NavbarSwap />
      </nav>
      <div className="absolute inset-0 overflow-hidden h-full bg-[linear-gradient(to_bottom,#639CB3,#8DDFFF_35%,#AFE9FF_60%,#F4FCFF_80%)] z-0">
        {/* Background Land Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={land}
            alt="land"
            layout="fill"
            objectFit="cover"
            sizes="60vw"
          />
        </div>
        <div className="relative flex justify-center items-center mx-auto h-screen z-20">
          <SwapComponents />
        </div>
      </div>
    </div>
  );
};

export default swapPage;
