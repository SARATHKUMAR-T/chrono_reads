"use client";
import { IoPersonCircleOutline } from "react-icons/io5";
import { toggleLogin, toggleSignup } from "@redux/UserForm";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { navVariants } from "../utils/motion";
import { motion } from "framer-motion";
import menu from "../public/Assets/icons/menu.svg";
import { Link as Scroll } from "react-scroll";

function Nav() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  // const validUser = useSelector(state => state.user.user);
  // console.log(validUser);
  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="fixed  top-0 z-50  w-full  h-14 px-0 sm:px-2 md:px-12"
    >
      {/* desktop navigation */}
      <div className="hidden sm:flex  ">
        {session === null ? (
          <div className="flex w-full items-center justify-between capitalize gap-3 md:gap-5">
            <button
              className="p-4 font-marienda text-xl font-bold text-teal-500 "
              onClick={() => {
                router.push("/");
                signOut();
              }}
            >
              {" "}
              Chrono reads
            </button>

            <div
              className="flex gap-14 font-semibold
            "
            >
              <Scroll
                to="howitworks"
                spy={true}
                activeClass="text-teal-500"
                smooth={true}
                duration={500}
                className="cursor-pointer "
              >
                How it works
              </Scroll>
              <Scroll
                to="contact"
                spy={true}
                activeClass="text-teal-500"
                smooth={true}
                duration={500}
                className="cursor-pointer "
              >
                contact
              </Scroll>
              <button className=" " onClick={() => dispatch(toggleLogin())}>
                Login
              </button>
            </div>
            <button
              className="primary_btn"
              onClick={() => dispatch(toggleSignup())}
            >
              SignUp
            </button>
          </div>
        ) : (
          <div className="flex justify-between w-full  md:gap-5">
            <button
              className="p-4 font-marienda text-xl font-bold text-teal-500 "
              onClick={() => {
                router.replace("/");
                signOut();
              }}
            >
              {" "}
              Chrono reads
            </button>
            <div className="flex gap-6 font-semibold capitalize items-center">
              <Link href="/post" className="black_btn">
                Feed
              </Link>
              <Link href="/createpost" className="black_btn">
                create post
              </Link>
              <button
                onClick={() => {
                  signOut();
                  router.replace("/");
                }}
              >
                Sign out
              </button>
              <Link href="/profile">
                <div className="p-1 bg-blue-400 rounded-full">
                  <IoPersonCircleOutline className="h-8 w-8 text-slate-900"></IoPersonCircleOutline>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {session === null ? (
          <>
            <div className="flex flex-col items-end w-full  pt-3">
              <Image
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                src={menu}
                alt="menu"
                width={24}
                className="mr-2"
                height={24}
              />
              {isMenuOpen && (
                <div className="bg-slate-500 min-h-screen w-full p-6 flex flex-col items-center justify-center gap-4 ">
                  <a href="#howitworks">How it works</a>
                  <Link href="/">contact</Link>
                  <button onClick={() => dispatch(toggleLogin())}>Login</button>
                  <button
                    className="primary_btn"
                    onClick={() => dispatch(toggleSignup())}
                  >
                    SignUp
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-end w-full">
            <Image
              src={menu}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/post"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Feed
                </Link>
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/createpost"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Post
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Nav;
