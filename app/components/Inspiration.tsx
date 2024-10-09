import Image from "next/image";
import Sofa from "../assets/Sofa.png";
import Dresser from "../assets/Dresser.png";
import ShoeDresser from "../assets/ShoeDresser.png";
function Inspiration() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-10">
      <h1 className="lg:text-7xl text-6xl font-extrabold drop-shadow-lg my-20 text-[#C9B18F]">
        Inspiration Collection
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <Image
          src={Sofa}
          alt="Sofa"
          className="rounded-tl-3xl hover:scale-110 transition-all duration-500 ease-in-out" layout="responsive"
        ></Image>
        <Image
          src={Dresser}
          alt="Dresser"
          className="md:mb-20 hover:scale-110 transition-all duration-500 ease-in-out" layout="responsive"
        ></Image>
        <Image
          src={ShoeDresser}
          alt="Shoe Dresser"
          className="rounded-br-3xl hover:scale-110 transition-all duration-500 ease-in-out" layout="responsive"
        ></Image>
      </div>
    </div>
  );
}

export default Inspiration;
