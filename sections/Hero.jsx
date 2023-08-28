import { toggleSignup } from "@redux/UserForm";
import { FaAngleRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import he1 from "../public/Assets/images/t1.svg";
import Image from "next/image";

function Hero() {
  const dispatch = useDispatch();
  return (
    <section id="hero" className="h-screen  pt-16 z-0  relative ">
      <Image
        src={he1}
        className="h-screen w-full absolute top-0 z-0"
        alt="he1"
      />
      <div className="max-w-4xl   mx-auto justify-center flex flex-col gap-6  pt-20 p-4">
        <h1 className="head_text  z-10">
          Share and inspire <br />
          people with chrono reads.
        </h1>
        <p className="z-10">
          Your Literary Diary Online - It allows you to exchange thoughts
          participate in conversations and foster a community centered around
          their love, for literature.
        </p>
        <div className="w-[7%] h-2 bg-teal-500 z-10" />
        <p className="font-bold z-10 text-lg">
          Join the community to find your next book to read
          <br /> and inspire people to read.
        </p>
        <div className="z-10">
          <button
            onClick={() => dispatch(toggleSignup())}
            className="px-3 py-2  rounded-sm hover:scale-105 transition-all duration-300 hover:bg-teal-800 hover:text-white gap-48 bg-teal-500 flex items-center justify-between"
          >
            <span className="font-semibold text-sm">Try it now</span>
            <FaAngleRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
