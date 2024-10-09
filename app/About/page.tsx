import Image from "next/image"
import About1 from "../assets/About1.png"
import About2 from "../assets/About2.png"
import GroupPhoto from "../assets/GroupPhoto.png"

function About() {
  return (
    <>
      <div className=" relative flex justify-center items-center h-[70svh] m-auto max-w-[1280px] flex-col gap-5">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-6xl font-bold text-[#6A6A6A]">A.K. Enterprises</h1>
          <svg width="390" height="38" viewBox="0 0 390 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M305.157 35.9453C212.565 26.0942 118.876 19.1754 25.7847 16.1119C21.0257 15.9553 -10.3131 17.3012 17.8463 13.5566C84.6906 4.66766 152.204 2.81978 219.501 2.16972C270.01 1.68183 320.523 2.5352 371.012 3.59594C376.32 3.70746 392.113 3.20483 386.92 4.35676C374.759 7.0544 362.165 6.99229 349.748 7.74801C233.64 14.8149 117.927 8.09706 1.94332 3.89652" stroke="#6A6A6A" strokeWidth="3" stroke-linecap="round" />
          </svg>
        </div>
        <p className="text-[#6A6A6A] mt-10 font-semibold text-2xl">AK Enterprise is a  company known for its high-quality and stylish furniture designs. Specialising in both modern and affordable furniture, AK Enterprise focuses on creating durable and aesthetically pleasing pieces for multiple category we work for valuable brands which working with a positive vision.Ak Enterprise Supports the brands in multiple ar  eas like Manufacture, operations, marketing , technical support and many more.We are for working effectively for brands from last 4 year and never let them down.
        </p>
      </div>

      {/* Team  */}
      <div className="flex justify-center items-center max-w-[1280px] m-auto flex-col">
        <h2 className="text-5xl font-bold">Our Team</h2>
        <p className="text-[#6A6A6A] font-bold text-xl">Coming Together Is Beginning, Keeping Together Is Progress, Working Together Is Success</p>
      </div>

      <div className="max-w-[1280px] m-auto flex items-center justify-center mt-10 gap-3">
        <Image src={About1} alt="About1" className="rounded-xl"></Image>
        <Image src={About2} alt="About2" className="rounded-xl"></Image>
      </div>
      <Image src={GroupPhoto} alt="Group" className="max-w-[1280px] m-auto mt-10 rounded-xl"></Image>
    </>
  )
}

export default About

