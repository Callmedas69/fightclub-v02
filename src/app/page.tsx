import React from "react";
import Hero01 from "@/components/mainpage/hero01";
import Narative02 from "@/components/mainpage/Narative02";
import Footer from "@/components/mainpage/Footer";
import Navbar from "@/components/mainpage/navbar";
import Flipbook from "@/components/mainpage/flip-book";
import VelocityText from "@/components/mainpage/scrollText";
import Whitepaper from "@/components/mainpage/Whitepaper";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero01 />
      <VelocityText />
      <Narative02 />
      <Flipbook />
      <Whitepaper />
      <Footer />
    </div>
  );
};

export default HomePage;
