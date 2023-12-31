"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textstyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px]  ${textstyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === "" ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textstyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[18px] font-bold text-[40px] md:text-[64px]   ${textstyles}`}
  >
    {title}
  </motion.h2>
);
