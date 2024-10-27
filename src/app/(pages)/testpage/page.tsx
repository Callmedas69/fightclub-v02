import Community from "@/components/MainpageGreen/Community";
import Footer from "@/components/MainpageGreen/Footer";
import Hero02 from "@/components/MainpageGreen/Hero02";
import Naratives from "@/components/MainpageGreen/Naratives";
import NavbarGreen from "@/components/MainpageGreen/NavbarGreen";
import VelocityText from "@/components/MainpageGreen/ScrollEffect";
import Team from "@/components/MainpageGreen/Team";
import Whitepaper from "@/components/MainpageGreen/Whitepaper";
import React from "react";

const testpage = () => {
  return (
    <div className="relative h-screen">
      <div className="fixed top-0 inset-x-0 z-50">
        <NavbarGreen />
      </div>
      <Hero02 />
      <VelocityText />
      <Community />
      <Naratives />
      <Whitepaper />
      <Team />
      <Footer />
    </div>
  );
};

export default testpage;
