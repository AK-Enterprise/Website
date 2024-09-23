import Link from "next/link";
import Image from "next/image";
import Group from "../assets/Group.png";
function Team() {
  return (
    <div className="h-screen flex justify-center items-center max-w-[1280px]  m-auto gap-10 ">
      <Image src={Group} alt="Group"></Image>
      <div className="flex justify-center items-center flex-col gap-5">
        <h2 className="text-5xl font-bold text-[#C9B18F] drop-shadow-lg">
          Together We Worked Hard, Together We Succeeded !
        </h2>
        <p>
          Our achievements are the result of our team&apos;s hard work,
          dedication, and collaboration. Together, we turned challenges into
          triumphs, proving that success comes from unity and relentless effort.
        </p>
        <ul className="grid grid-cols-2 gap-4 text-gray-600">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Best Employees
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            High Tech Machines
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Skilled Workers
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Zestful Energy
          </li>
        </ul>
        <button
          type="button"
          className="text-white bg-[#C9B18F] hover:bg-[#e4d1b6] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
        >
          <Link href="/About">More About Us</Link>
        </button>
      </div>
    </div>
  );
}

export default Team;
