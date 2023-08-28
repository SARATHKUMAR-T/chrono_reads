"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa6";
import sara from "../public/Assets/images/c2.jpg";
import book from "../public/Assets/images/bookcover.jpg";
import { TitleText, TypingText } from "@components/CustomTexts";
import { fadeIn } from "@utils/motion";
import StartSteps from "@components/StartSteps";
import { startingFeatures } from "@constants/book1";

const GetStarted = () => (
  <section className="min-h-screen py-12 px-4 ">
    <div className="bg-teal-500 mt-12 max-w-3xl mx-auto relative  px-20 py-10">
      <FaQuoteLeft className="absolute -top-7 h-16 w-16" />
      <p className="max-w-2xl text-2xl font-bold ">
        We hired an exceptional staff enginerr and a senior PM using dover. the
        procuct helped us reach candidates with decades of experience
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
          <p className="font-bold">Sara</p>
          <p className="text-sm">Software developer</p>
        </div>
      </div>
    </div>
    {/* how it works */}
    <div className="flex flex-wrap gap-8 w-full mt-24 max-w-6xl mx-auto bg-red-500">
      <div className="flex-1 bg-green-700">
        <Image src={book} className="w-full h-full object-contain" alt="book" />
      </div>
      <div className="flex-1 p-3">
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaversus Works" />
          <TitleText title={<>Get Started with just few clicks</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} text={feature} number={index + 1} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default GetStarted;
