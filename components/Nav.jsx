"use client";
import { IoPersonCircleOutline } from "react-icons/io5";
import { toggleLogin } from "@redux/UserForm";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

function Nav() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  // const validUser = useSelector(state => state.user.user);
  // console.log(validUser);
  const { data: session } = useSession();
  const router = useRouter();

  const dispatch = useDispatch();
  return (
    <nav className="fixed top-0 z-50 bg-green-600 flex-between w-full mb-16 h-14 px-12">
      <Link href="/" className=" flex gap-2 flex-center">
        <Image
          alt="Prompotopia logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Chorono Reads</p>
      </Link>
      {/* <button
        onClick={() => {
          router.push("/");
        }}
      >
        Chrono reads
      </button> */}
      {/* desktop navigation */}
      <div className="hidden sm:flex">
        {session === null ? (
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
            <Link href="/createpost" className="black_btn">
              create post
            </Link>
            <button
              onClick={() => {
                router.push("/");
                signOut();
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
        )}
      </div>
    </nav>
  );
}

export default Nav;
