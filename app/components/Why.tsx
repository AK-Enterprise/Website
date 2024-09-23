import WhyImg from "../assets/WhyImage.png";
import Image from "next/image";
import Truck from "../assets/Truck.png";
import Bag from "../assets/Bag.png";
import Refund from "../assets/Return.png";
import Service from "../assets/Safety.png";

function Why() {
  return (
    <div className="max-w-[1280px] m-auto flex justify-center items-center gap-10">
      <div className="h-screen flex justify-center items-center flex-col gap-20">
        <h1 className="text-7xl font-extrabold drop-shadow-lg text-[#C9B18F]">
          Why Choose Us ?
        </h1>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <Image src={Truck} alt="Truck"></Image>
            <h3 className="font-bold">Fast And Free Shipping</h3>
            <p>We Deliver As Per Our Promising Date</p>
          </div>
          <div>
            <Image src={Bag} alt="Bag"></Image>
            <h3 className="font-bold">Easy To Shop</h3>
            <p>Available At Multiple Stores And Brand Websites</p>
          </div>
          <div>
            <Image src={Service} alt="Refund"></Image>
            <h3 className="font-bold">24/7 Customer Support</h3>
            <p>Our Team Is Always Actibe To Guide And Help</p>
          </div>
          <div>
            <Image src={Refund} alt="Refund"></Image>
            <h3 className="font-bold">Hassle Free Returns</h3>
            <p>We Allow Hassle Free Deals In Respect To Our Policy</p>
          </div>
        </div>
      </div>
      <Image src={WhyImg} alt="Why Image" />
    </div>
  );
}

export default Why;
