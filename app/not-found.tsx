import Image from "next/image";
import BrokenChair from "./assets/BrokenChair.png";
function notFound() {
  return (
    <div className="flex justify-center items-center h-screen max-w-[1280px] m-auto">
      <div className="flex justify-center items-center h-screen flex-col gap-5">
        <h2 className="text-2xl font-bold">404 | Not Found</h2>
        <p>Oops Could Not Find The Page You Are Looking For</p>
      </div>
      <Image src={BrokenChair} alt="404Image"></Image>
    </div>
  );
}

export default notFound;
