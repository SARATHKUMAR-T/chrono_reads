"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa6";
import sara from "../public/Assets/images/t2.jpg";
import book from "../public/Assets/images/student.svg";
import { TitleText, TypingText } from "@components/CustomTexts";
import { fadeIn, planetVariants, staggerContainer } from "@utils/motion";
import StartSteps from "@components/StartSteps";
import { startingFeatures } from "@constants/book1";

const GetStarted = () => (
  <section className="min-h-screen py-12 px-4 " id="howitworks">
    <div className="bg-teal-500 mt-12 max-w-3xl mx-auto relative px-4 sm:px-20 py-10">
      <FaQuoteLeft className="absolute -top-7 h-16 w-16" />
      <p className="max-w-2xl text-lg sm:text-2xl font-bold ">
        Here, at ChronoReads our main focus is, on building a community of
        readers. Through fostering connections and exchanging ideas our goal is
        to create a platform that not encourages development but also nurtures a
        thriving literary community.
      </p>
      <div className="flex items-center gap-4 mt-3">
        <div className="h-16 w-16 rounded-full p-1 bg-gray-600">
          <Image
            src={sara}
            alt="sara"
            className="w-full rounded-full h-full object-contain"
          />
        </div>
        <div>
          <p className="font-bold uppercase">Sarath</p>
          <p className="text-sm">Software developer</p>
        </div>
      </div>
    </div>
    {/* how it works */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-wrap flex-col md:flex-row gap-8 w-full mt-24 max-w-6xl mx-auto p-2 bg-slate-200 rounded-lg shadow-lg shadow-teal-500"
    >
      <motion.div variants={planetVariants("left")} className="flex-1 ">
        <Image src={book} className="w-full h-full object-contain" alt="book" />
      </motion.div>
      <div className="flex-1 p-3 ">
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col  "
        >
          <TypingText title="| How Chrono Reads Works" textstyles="text-slate-700" />
          <TitleText title={<>Get Started with just few clicks</>} textstyles="text-slate-800" />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} text={feature} number={index + 1} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default GetStarted;
