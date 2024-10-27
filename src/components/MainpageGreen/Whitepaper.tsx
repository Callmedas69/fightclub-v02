import React from "react";
import { Button } from "../ui/button";

const Whitepaper = () => {
  return (
    <div className=" relative bg-purple-800">
      <div className="flex flex-col mx-auto justify-center items-center text-white py-20 w-[60%]">
        <div className="font-bold text-6xl">
          DYOR. GET THE <span className="text-orange-400">WHITEPAPER</span>
        </div>
        <div>
          <p className="p-5 text-center text-xl">
            What are you fight for ? What are you investing in? Do you even care
            ?? Of course you do! And so you&#39;ll want to read our{" "}
            <span className="text-orange-400 font-bold">whitepaper</span> to
            make sure you&#39;re doing the right thing. So, what are you waiting
            for? Go ahead - click that link. And check our socials, come ask us
            questions in our TG if you still have doubts.
          </p>
        </div>
        <div className="p-5">
          <Button className="bg-yellow-500 rounded-none text-2xl text-black font-semibold px-10 py-7">
            GET THE WHITEPAPER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
