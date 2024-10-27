"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";

export const BackWild = localFont({
  src: [
    {
      path: "../../app/fonts/Back-Wild.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

const faqData = [
  {
    question: "What is an NFT Mint?",
    answer:
      "NFT Minting is the process of converting digital files into crypto collections or digital assets stored on the blockchain.",
  },
  {
    question: "How much does it cost to mint an NFT?",
    answer:
      "The cost to mint an NFT varies depending on the blockchain you choose. Some blockchains, like Ethereum, have higher gas fees, while others may be cheaper.",
  },
  {
    question: "How long does it take to mint an NFT?",
    answer:
      "The time to mint an NFT depends on network congestion. It can take anywhere from a few seconds to several minutes.",
  },
  {
    question: "What wallet do I need to mint an NFT?",
    answer:
      "You will need a crypto wallet, such as MetaMask, that supports the blockchain network you intend to use for minting the NFT.",
  },
  {
    question: "Is it possible to mint multiple NFTs at once?",
    answer:
      "Yes, batch minting allows you to mint multiple NFTs in a single transaction, saving on gas fees.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="relative bg-white p-6 text-black/60 overflow-hidden"
    >
      {/* FAQ Content */}
      <h2
        className={`text-[7rem] text-center mb-8 mt-20 mb-20 ${BackWild.className}`}
      >
        FA<span className="text-orange-400">Q</span>&apos;s
      </h2>

      <div className="max-w-[1200px] mx-auto space-y-4 ">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            {/* Question */}
            <motion.div
              className="cursor-pointer p-4 bg-blue-300 rounded-lg"
              onClick={() => toggleFAQ(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-2xl">{faq.question}</h3>
            </motion.div>

            {/* Answer */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="p-4 bg-black-900 mt-2 rounded-lg">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
