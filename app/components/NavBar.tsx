"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "../assets/Logo.png";
import Image from "next/image";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-10 absolute top-0 left-0 w-full h-16 flex items-center justify-around p-10">
      <Link href="/">
        <Image src={Logo} alt="Logo" className="cursor-pointer"></Image>
      </Link>
      <div className="gap-6 font-semibold lg:flex hidden">
        <Link
          href="/"
          className="hover:text-slate-500 hover:underline cursor-pointer"
        >
          Home
        </Link>
        <Link
          href="/About"
          className="hover:text-slate-500 hover:underline cursor-pointer"
        >
          About
        </Link>
        <Link
          href="/Career"
          className="hover:text-slate-500 hover:underline cursor-pointer"
        >
          Career
        </Link>

        <Link
          href="/Contact"
          className="hover:text-slate-500 hover:underline cursor-pointer"
        >
          Contact
        </Link>
      </div>
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-5 h-0.5 bg-black rounded-full"></span>
        <span className="block w-5 h-0.5 bg-black rounded-full mt-1"></span>
        <span className="block w-5 h-0.5 bg-black rounded-full mt-1"></span>
      </button>
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-6 font-semibold absolute top-10 right-0 bg-white p-4 rounded shadow-md">
          <Link
            href="/"
            className="hover:text-slate-500 hover:underline cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="hover:text-slate-500 hover:underline cursor-pointer"
          >
            About
          </Link>
          <Link
            href="/Career"
            className="hover:text-slate-500 hover:underline cursor-pointer"
          >
            Career
          </Link>
          <Link
            href="/Contact"
            className="hover:text-slate-500 hover:underline cursor-pointer"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
