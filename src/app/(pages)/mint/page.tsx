"use client";

import Image from "next/image";
import land from "@/assets/land02.svg";
import MintPhase from "@/components/mint/mintPhase";
import NavbarMint from "@/components/mint/NavbarMint";

export default function MintPage() {
  return (
    <div className="relative w-full h-screen">
      <nav className="fixed top-0 left-0 right-0 z-30">
        <NavbarMint />
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
          <MintPhase />
        </div>
      </div>
    </div>
  );
}
