import { toggleSignup } from "@redux/UserForm";
import { FaAngleRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import he1 from "../public/Assets/images/t1.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

function Hero() {
  const dispatch = useDispatch();
  return (
    <section
      id="hero"
      className="h-screen max-w-full pt-0 sm:pt-16 z-0  relative "
    >
      <Image
        src={he1}
        className="min-h-screen max-w-full absolute top-0 z-0"
        alt="he1"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-4xl   mx-auto justify-center flex flex-col gap-6  pt-20 p-4"
      >
        <motion.h1
          variants={textVariant(1.1)}
          className="head_text teal_gradient z-10"
        >
          Share and inspire <br />
          people with chrono reads.
        </motion.h1>
        <motion.p variants={textVariant(1.3)} className="z-10 font-semibold">
          Your Literary Diary Online - It allows you to exchange thoughts
          participate in conversations and foster a community centered around
          their love, for literature.
        </motion.p>
        <motion.div
          variants={textVariant(1.5)}
          className="w-[7%] h-2 bg-teal-500 z-10"
        />
        <motion.p
          variants={textVariant(1.8)}
          className="font-bold z-10 text-lg"
        >
          Join the community to find your next book to read
          <br /> and inspire people to read.
        </motion.p>
        <motion.div variants={textVariant(2)} className="z-10">
          <button
            onClick={() => dispatch(toggleSignup())}
            className="px-3 py-2  rounded-sm hover:scale-105 transition-all duration-300 hover:bg-teal-800 hover:text-white gap-48 bg-teal-500 flex items-center justify-between"
          >
            <span className="font-semibold text-sm">Try it now</span>
            <FaAngleRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
