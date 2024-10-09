"use client";
import Image from "next/image";
import Link from "next/link";
import Achievements from "../assets/Achievements-Lg.png";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
} from "@react-three/drei";
import AchievementsSm from "../assets/Ach-Sm.png";
import ArmChair from "../components/ArmChair"

function Hero() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="md:max-w-[1280px] m-auto flex flex-col md:flex-row items-center justify-center gap-2">
        <div className="flex flex-col items-start justify-center gap-8">
          <h1 className="text-4xl md:text-8xl font-extrabold drop-shadow-lg text-[#C9B18F]">
            Creating Furniture That Speaks Your Style
          </h1>
          <div className="flex gap-4 ">
            <button className="rounded-full px-4 py-2 text-md md:text-xl font-bold bg-none text-[#C9B18F] border-2 border-[#C9B18F]">
              <Link href="/Contact">Contact Us</Link>
            </button>
          </div>
        </div>
        <Canvas camera={{ fov: 89, position: [1, 5, 5] }} >
          <OrbitControls
            enableZoom={true}
            enableRotate={true}
            enablePan={true}
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
          <Environment preset="studio" />
          <group scale={[5, 5, 5]}>
            <ArmChair></ArmChair>
          </group>
        </Canvas>
      </div>
      <div className="flex justify-center items-center max-w-[1280px] m-auto relative">
        <Image src={AchievementsSm} alt="Small" className="md:hidden"></Image>
        <Image src={Achievements} alt="Achievements"></Image>
      </div>
    </div>
  );
}
export default Hero;

