// "use client";

// import React, { useRef } from "react";
// import localFont from "next/font/local";
// import { motion, useTransform, useScroll } from "framer-motion";
// import { Clouds } from "../web-ui/Clouds";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";

// export const BackWild = localFont({
//   src: [
//     {
//       path: "../../app/fonts/Back-Wild.woff",
//       weight: "400",
//       style: "normal",
//     },
//   ],
// });

// // Helper function to render each letter with a hover effect
// const renderLetters = (text: string) => {
//   return Array.from(text).map((char, index) => (
//     <motion.span
//       key={index}
//       whileHover={{ scale: 1.5, color: "#AFE9FF" }} // Scale up and change color on hover
//       transition={{ type: "spring", stiffness: 300 }}
//       className="inline-block"
//     >
//       {char}
//     </motion.span>
//   ));
// };

// const Hero = () => {
//   const { scrollY } = useScroll();
//   const textY = useTransform(scrollY, [0, 500], [0, -100]); // Parallax effect for the text
//   const parallaxRef = useRef(null);

//   return (
//     <div>
//       <div className="flex flex-col justify-center items-center h-screen">
//         <Clouds parallaxRef={parallaxRef} />

//         {/* Reveal Effect for the "FIGHT CLUB" text */}
//         <motion.div
//           className="text-center font-bold"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           style={{ y: textY }}
//         >
//           <motion.h1
//             className={`text-white space-x-1 text-[200px] ${BackWild.className}`}
//           >
//             {renderLetters("TTS")}
//           </motion.h1>
//         </motion.div>
//         <motion.div
//           className="text-center font-bold"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           style={{ y: textY }}
//         >
//           <motion.h1
//             className={`text-white space-x-1 text-[30px] ${BackWild.className}`}
//           >
//             {renderLetters("the true signal")}
//           </motion.h1>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
