import Image from "next/image";
import Sofa from "../assets/Sofa.png";
import Dresser from "../assets/Dresser.png";
import ShoeDresser from "../assets/ShoeDresser.png";
function Inspiration() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-10">
      <h1 className="md:text-7xl text-4xl font-extrabold drop-shadow-lg my-20 text-[#C9B18F]">
        Inspiration Collection
      </h1>
      <div className="flex justify-center items-center gap-10">
        <Image
          src={Sofa}
          alt="Sofa"
          className="rounded-tl-3xl hover:scale-110 transition-all duration-500 ease-in-out"
        ></Image>
        <Image
          src={Dresser}
          alt="Dresser"
          className="mb-20 hover:scale-110 transition-all duration-500 ease-in-out"
        ></Image>
        <Image
          src={ShoeDresser}
          alt="Shoe Dresser"
          className="rounded-br-3xl hover:scale-110 transition-all duration-500 ease-in-out"
        ></Image>
      </div>
    </div>
  );
}

export default Inspiration;
