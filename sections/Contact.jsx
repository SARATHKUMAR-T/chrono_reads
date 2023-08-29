"use client";

import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import { socials } from "@constants/book1";
import Image from "next/image";
import twitter from "../public/Assets/images/twitter.svg";
import { useDispatch } from "react-redux";
import { toggleSignup } from "@redux/UserForm";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      id="contact"
      className={`bg-teal-900 py-8 relative `}
    >
      <div className="footer-gradient" />
      <div className={` mx-auto flex flex-col gap-8`}>
        <div className="px-12 flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text[64px] text-[44px] text-white">
            Enter the chrono reads
          </h4>
          <button
            type="button"
            onClick={() => dispatch(toggleSignup())}
            className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-sm gap-[12px]"
          >
            {/* <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          /> */}
            <span className="font-normal primary_btn text-[16px] text-white">
              chrono reads
            </span>
          </button>
        </div>

        <div className="flex px-12  flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              CHRONO READS
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright 2022-2023 chrono reads.All rights reserved.
            </p>
            <div className="">
              <a
                className="text-white opacity-50"
                href="https://saraensemble.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Designed and developed by{" "}
                <span className="text-cyan-500 underline hover:scale-105 duration-300 transition-all ">
                  Sarath.dev
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
