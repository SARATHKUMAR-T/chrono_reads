"use client";
import { toggleLogin } from "@redux/UserForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Nav() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const validUser = useSelector(state => state.user.user);
  console.log(validUser);

  const dispatch = useDispatch();
  return (
    <nav className="fixed top-0 z-50 bg-yellow-500 flex-between w-full mb-16 h-14 px-6">
      <Link href="/" className=" flex gap-2 flex-center">
        <Image
          alt="Prompotopia logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Chorono Reads</p>
      </Link>
      {/* desktop navigation */}
      <div className="hidden sm:flex">
        {!isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/">How it works</Link>
            <Link href="/">testimonails</Link>
            <Link href="/">about</Link>
            <Link href="/">contact</Link>
            <button
              className="bg-blue-600 text-black"
              onClick={() => dispatch(toggleLogin())}
            >
              Login
            </button>
          </div>
        ) : (
          <div className="flex gap-3 md:gap-5">
            <Link href="/post" className="black_btn">
              create post
            </Link>
            <Link href="/">Sign out</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
