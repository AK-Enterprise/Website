import Image from "next/image";
import Blisswood from "../assets/Blisswood.png";
import Amazon from "../assets/Amazon.png";
import DreamHome from "../assets/DreamHome.png";
import OnBuy from "../assets/OnBuy.png";
import ManoMano from "../assets/ManoMano.png";
import Wayfair from "../assets/Wayfair.png";
import Ebay from "../assets/Ebay.png";
function Clients() {
  return (
    <div className="max-w-[1280px] m-auto flex flex-col items-center justify-center gap-10 my-10 h-screen hidden lg:block">
      <h1 className="text-xl lg:text-4xl font-extrabold text-[#C9B18F]">
        Our Retail Partners
      </h1>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        <Image
          src={Blisswood}
          alt="Blisswood"
          width={200}
          height={200}
          className="hover:scale-110 transition-all duration-500"
        ></Image>
        <Image
          src={Amazon}
          alt="Amazon"
          width={200}
          height={200}
          className="hover:scale-110 transition-all duration-500"
        ></Image>
        <Image
          src={DreamHome}
          alt="DreamHome"
          width={200}
          height={200}
          className="hover:scale-110 transition-all duration-500"
        ></Image>
        <Image
          src={OnBuy}
          alt="OnBuy"
          width={200}
          height={200}
          className="hover:scale-110 transition-all duration-500"
        ></Image>
        <Image
          src={ManoMano}
          alt="ManoMano"
          width={200}
          height={200}
          className="hover:scale-110 transition-all duration-500"
        ></Image>
        <Image
          src={Wayfair}
          alt="Wayfair"
          width={200}
          height={200}
          className="hover:scale-110 transition-all duration-500"
        ></Image>
        <Image
          src={Ebay}
          alt="Ebay"
          width={200}
          height={200}
          className="hover:scale-110 transition-all duration-500"
        ></Image>
      </div>
    </div>
  );
}

export default Clients;
