import Hero02 from "@/components/MainpageGreen/Hero02";
import NavbarGreen from "@/components/MainpageGreen/NavbarGreen";
import React from "react";

const testpage = () => {
  return (
    <div className="relative h-screen">
      <div className="fixed top-0 inset-x-0 z-50">
        <NavbarGreen />
      </div>

      {/* <div className="absolute inset-0 flex items-center justify-center z-40">
        <VelocityText />
      </div> */}

      <div className="h-screen z-30">
        <Hero02 />
      </div>
    </div>
  );
};

export default testpage;
