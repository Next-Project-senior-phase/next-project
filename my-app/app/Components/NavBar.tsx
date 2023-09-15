'use client'
import Link from "next/link";
import UserDropDown from "./UserDropDown";
import { useState } from "react";

export default function NavBar() {
  const [query, setQuery] = useState<string>('')
  return (
    <main className="w-screen h-[100px] bg-gray-100 mb-20">
      <div className="pt-12 w-screen h-9 justify-center items-center gap-36 inline-flex">
        <div className="justify-start items-start gap-48 flex">
          <div className="w-28 h-6 justify-center items-center flex">
            <Link
              href="/"
              className="text-black text-2xl font-bold leading-normal tracking-wide"
            >
              Aphrodite
            </Link>
          </div>
          <div className="justify-start items-start gap-12 flex">
            <Link className="hover:text-red-500 transition ease-in-out delay-150 duration-500" href="/">
              Home
            </Link>
            <Link className="hover:text-red-500 transition ease-in-out delay-150 duration-500" href="/Contact">
              Contact
            </Link>
            <Link className="hover:text-red-500 transition ease-in-out delay-150 duration-500" href="/About">
              About
            </Link>
            <Link className="hover:text-red-500 transition ease-in-out delay-150 duration-500" href="/SignUp">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="justify-start items-center gap-6 flex">
        <div className="flex">
          <input
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What are you looking for?"
            className="w-60 pl-3 pr-4 py-1.5 bg-neutral-200 rounded flex-col justify-center items-center gap-2.5 inline-flex"
          ></input>
          <Link className="relative w-8 h-8 left-[-30px] py-2" href={`/AllProducts/${query}`} >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          </Link>
          </div>
          <UserDropDown />
        </div>
      </div>
    </main>
  );
}
