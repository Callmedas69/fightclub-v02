"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Citizen1 from "../../assets/citizen/01.svg";
import Citizen2 from "../../assets/citizen/02.svg";
import Citizen3 from "../../assets/citizen/03.svg";
import Citizen4 from "../../assets/citizen/04.svg";
import Citizen5 from "../../assets/citizen/05.svg";

const naratives = [
  {
    id: "symbol",
    title: "SYMBOL",
    desc: "TTS, Trump's Fight! Fist stands for US! THE PEOPLE! For our struggle against the Dark State and military greed. It is a cry out to FIGHT against the rigged world, and to the elites who try to hold us back and put us down.",
    imageSrc: Citizen1,
  },
  {
    id: "fight",
    title: "FIGHT FOR FREEDOM",
    desc: "TTS advocates for fairness, justice, and resilience in the face of adversity. It&apos;s about empowering individuals to fight against oppressive policies and the influence of a select few who control the system.",
    imageSrc: Citizen2,
  },
  {
    id: "rebel",
    title: "REBELLION",
    desc: "TTS represents a rebellion against rigged elections, unfair media coverage, and laws that benefit the elites. It is a movement to challenge the status quo and fight the 'big caps' and corrupt systems.",
    imageSrc: Citizen3,
  },
  {
    id: "leader",
    title: "LEADERSHIP",
    desc: "The movement looks back on Trump's first term as a time of progress and peace, in contrast to the current leadership. TTS is positioned as a symbol of hope for America's resurgence under Trump's guidance.",
    imageSrc: Citizen4,
  },
  {
    id: "vision",
    title: "THE VISION",
    desc: "The vision extends into the cryptocurrency world, with TTS aiming to make crypto great again into platforms like BASE chain. It seeks to become a viral and influential meme within the crypto space.",
    imageSrc: Citizen5,
  },
];

const Narative02 = () => {
  return (
    <section className="py-5">
      {naratives.map((naratives, index) => (
        <motion.div
          key={naratives.id}
          className="border mx-auto border-white flex flex-col bg-[linear-gradient(to_bottom,#639CB3,#8DDFFF_35%,#AFE9FF_60%,#F4FCFF)] md:flex-row text-black/60  p-8 justify-between items-start mb-12 w-[300px] md:w-[1100px] sticky top-28"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6 md:space-y-10">
            <p className="text-sm md:text-lg">{naratives.desc}</p>
            <h2 className="text-xl font-bold md:text-3xl">{naratives.title}</h2>
          </div>
          <Image
            src={naratives.imageSrc}
            alt={naratives.title}
            width={150}
            height={150}
            className="rounded-full mt-6 md:mt-0"
          />
        </motion.div>
      ))}
    </section>
  );
};

export default Narative02;
