import Image from "next/image";
import Story from "../assets/Story.jpg";
import AboutImage from "../assets/About.jpg";
function About() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen max-w-[1280px] m-auto relative">
        <div className="flex justify-between items-center gap-6">
          <Image
            src={AboutImage}
            alt="About"
            className="h-[500px] w-[500px] rounded-lg"
          ></Image>
          <p className="text-gray-500 text-2xl font-semibold flex justify-start items-start flex-col gap-4">
            <span className="text-8xl font-extrabold text-[#e6cca7]">
              About Us
            </span>
            At A.K.Enterprises We Are Committed To Providing High-Quality
            Products And Services To Our Clients. We Are Proud To Be A Leading
            Company In The Furniture Industry, And We Are Committed To Ensuring
            Our Clients Get The Best Out Of Our Services. We Are A Team Of
            Experts Who Ares Committed To Providing The Best Products And
            Services To Our Clients.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen max-w-[1280px] m-auto relative">
        <div className="flex justify-between items-center gap-6">
          <p className="text-gray-500 text-2xl font-semibold flex justify-start items-start flex-col gap-4">
            <span className="text-8xl font-extrabold text-[#e6cca7]">
              Our Story
            </span>
            Our mission is to provide innovative furniture solutions that
            enhance the way people live, work, and play. We strive to build
            long-term relationships with our brand partners, empowering them to
            succeed in the ever-evolving furniture industry. Through our
            expertise in manufacturing and e-commerce, we help our partners
            reach new heights and connect with their customers in meaningful
            ways.
          </p>
          <Image
            src={Story}
            alt="Story"
            className="h-[500px] w-[500px] rounded-lg"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default About;
