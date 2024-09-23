import Hero from "../components/Hero";
import Why from "../components/Why";
import Inspiration from "../components/Inspiration";
import New from "../components/New";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Image from "next/image";
import Achievements from "../assets/Ach-Lg.png";
// import HeroVidz from "../assets/HeroVidz.gif";
function Main() {
  return (
    <div>
      {/* <Image
        src={HeroVidz}
        alt="HeroGif"
        className="h-screen w-full relative"
      ></Image> */}
      <Hero></Hero>
      <div className="flex justify-center items-center max-w-[1280px] m-auto relative">
        <Image src={Achievements} alt="Achievements"></Image>
      </div>
      <Why></Why>
      <Inspiration></Inspiration>
      <New></New>
      <Team></Team>
      <Clients></Clients>
      <Testimonials></Testimonials>
    </div>
  );
}

export default Main;
