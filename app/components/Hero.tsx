"use client";
// import Achievements from "./Achievements";
import Image from "next/image";
import Chair from "../assets/3DChair.gif";
// import Chair from "../components/Chair";
import Link from "next/link";
// import { Canvas } from "react-three-fiber";
// import { OrbitControls } from "@react-three/drei";
// import { Environment } from "@react-three/drei";
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
        {/* <Canvas camera={{ fov: 72, position: [2.3, 2.5, 2.3] }}>
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            enablePan={false}
          />
          <ambientLight intensity={1} />
          <spotLight
            position={[0, 25, 0]}
            angle={1.3}
            penumbra={1}
            castShadow
            intensity={2}
            shadow-bias={-0.0001}
          />
          <Environment preset="studio" /> */}
        {/* <Chair></Chair> */}

        <Image src={Chair} alt="Chair" className="relative"></Image>
        {/* </Canvas> */}
      </div>
    </div>
  );
}
export default Hero;
