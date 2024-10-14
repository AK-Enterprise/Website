import WhyImg from "../assets/WhyImage.png";
import Image from "next/image";
import Truck from "../assets/Truck.png";
import Bag from "../assets/Bag.png";
import Refund from "../assets/Return.png";
import Service from "../assets/Safety.png";

function Why() {
  return (
    <div className="max-w-[1280px] mx-10 lg:m-auto flex justify-center items-center md:gap-10 flex-col md:flex-row">s
      <div className="h-100vh md:h-screen flex justify-center items-center flex-col gap-10">
        <div className="flex justify-center items-center flex-col gap-2 mx-5">
          <h1 className="text-4xl md:text-7xl font-extrabold drop-shadow-lg text-[#C9B18F]">
            Why Choose Us ?
          </h1>
          <p className="text-sm">We Are The Most Prominent And Promising Support For Furniture Brands</p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <Image src={Truck} alt="Truck"></Image>
            <h3 className="font-bold">Manufacture</h3>
            <p>We Deliver Best Quality Through Our Manufacturing Unit</p>
          </div>
          <div>
            <Image src={Bag} alt="Bag"></Image>
            <h3 className="font-bold">Platform Support</h3>
            <p>We Manage The Brands On Multiple Marketplaces</p>
          </div>
          <div>
            <Image src={Service} alt="Refund"></Image>
            <h3 className="font-bold">Customer Support</h3>
            <p>Our Team Provides 24/7 Customer Support</p>
          </div>
          <div>
            <Image src={Refund} alt="Refund"></Image>
            <h3 className="font-bold">Technical Support</h3>
            <p>We Support In Every Aspects Of Technicality</p>
          </div>
        </div>
      </div>
      <Image src={WhyImg} alt="Why Image" layout="responsive" />
    </div>
  );
}

export default Why;
