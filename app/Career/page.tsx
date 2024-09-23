"use client";
// import { useState } from "react";
import Girl from "../assets/Girl.png";
import Image from "next/image";
import React from "react";
import SearchBar from "../components/SearchBar";
function Career() {
  // const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value: string) => {
    // setSearchTerm(value);
    console.log(value);
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex justify-between items-center h-screen m-auto max-w-[1280px]">
        {/* Hero Text  */}
        <div className="flex flex-col gap-5">
          <h1 className="text-7xl font-bold">
            Find The Career With
            <span className="text-[#6A6A6A] flex justify-center flex-col items-start">
              <span> A.K.Enterprises</span>
              <span>
                <svg
                  width="390"
                  height="38"
                  viewBox="0 0 390 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M305.157 35.9453C212.565 26.0942 118.876 19.1754 25.7847 16.1119C21.0257 15.9553 -10.3131 17.3012 17.8463 13.5566C84.6906 4.66766 152.204 2.81978 219.501 2.16972C270.01 1.68183 320.523 2.5352 371.012 3.59594C376.32 3.70746 392.113 3.20483 386.92 4.35676C374.759 7.0544 362.165 6.99229 349.748 7.74801C233.64 14.8149 117.927 8.09706 1.94332 3.89652"
                    stroke="#6A6A6A"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-xl font-semibold">
              Trending Jobs Keyword
            </p>
            <p className="text-gray-300 text-lg font-semibold">
              Web Designer | Marketing Manager | UI/UX Designer
            </p>
          </div>
          <SearchBar onChange={handleSearchChange}></SearchBar>
        </div>
        <div>
          <Image
            src={Girl}
            alt="Girl"
            className="relative flex justify-center items-end m-0 p-0"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Career;
