"use client";
// import Achievements from "./Achievements";
import Image from "next/image";
import Chair from "../assets/3DChair.gif";
import Link from "next/link";
function Hero() {
  return (
    <div className="h-screen relative">
      <div className="h-screen md:max-w-[1280px] m-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-start justify-center h-screen gap-8">
          <h1 className="text-4xl md:text-8xl font-extrabold drop-shadow-lg text-[#C9B18F]">
            Creating Furniture That Speaks Your Style
          </h1>
          <div className="flex gap-4 ">
            <button className="rounded-full px-4 py-2 text-md md:text-xl font-bold bg-[#C9B18F] text-white">
              <Link href="/Gallery">Gallery</Link>
            </button>
            <button className="rounded-full px-4 py-2 text-md md:text-xl font-bold bg-none text-[#C9B18F] border-2 border-[#C9B18F]">
              <Link href="/Brochure">Brochure</Link>
            </button>
          </div>
        </div>
        <div>
          <Image src={Chair} alt="Chair" height={1500} width={1500}></Image>
        </div>
      </div>
    </div>
  );
}
export default Hero;
