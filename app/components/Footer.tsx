"use client";
import React from "react";
import Image from "next/image";
import FooterSofa from "../assets/FooterSofa.png";
import Email from "../assets/Email.png";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bottom-0">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="flex items-center justify-between">
          <form
            className="form"
          >
            <div className="flex gap-2 items-center mb-2">
              <Image src={Email} alt="Email" className="hidden md:block"></Image>
              <h3>Get In Touch</h3>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-full max-w-sm lg:min-w-[200px]">
                <input
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Your Name"
                ></input>
              </div>
              <div className="w-full max-w-sm min-w-[200px]">
                <input
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Your Email"
                ></input>
              </div>
            </div>
            <div className="flex justify-center gap-4 items-center w-full mt-2">
              <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Your Message"
              ></input>
              <button
                className="rounded-md bg-[#C9B18F] p-2 hover:bg-[#e4d1b6] hover:text-white focus:outline-none"
                type="submit"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.213 0.84186C28.7851 1.2201 29.0853 1.87391 28.9776 2.52772L25.3526 25.0059C25.2677 25.53 24.9335 25.9893 24.4464 26.2487C23.9593 26.508 23.3759 26.5404 22.8605 26.3351L15.7067 23.4983L13.4355 27.5239C13.1409 28.048 12.5122 28.3128 11.9062 28.1669C11.3001 28.021 10.8753 27.5022 10.8753 26.9079V21.7206C10.8753 21.4342 10.9773 21.1532 11.1642 20.9263L20.5269 9.43867C20.6685 9.05503 20.1587 8.66599 19.7905 8.98479L9.65186 17.7329L7.83936 19.2945C7.31827 19.743 6.57628 19.8672 5.92491 19.6079L1.11046 17.6951C0.476082 17.4411 0.0456136 16.8684 0.00596516 16.2091C-0.0336833 15.5499 0.317489 14.9285 0.917879 14.5989L26.2929 0.766212C26.8989 0.436604 27.6466 0.469025 28.2187 0.84186H28.213Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </form>
          <Image src={FooterSofa} alt="FooterSofa" className="hidden lg:block" />
        </div>

        <div className="flex items-center">
          <div className="mb-6 max-w-[400px]">
            <h2 className="text-lg md:text-2xl font-bold text-[#C9B18F]">
              A.K Enterprises
            </h2>
            <p className="mt-2 text-gray-600 text-xs md:text-sm">
              AK Enterprise is a furniture company known for its high-quality
              and stylish furniture designs. Specializing in both modern and
              affordable furniture, AK Enterprise focuses on creating durable
              and aesthetically pleasing pieces for homes and offices.
            </p>
          </div>
          <div className="mb-8 flex space-x-6">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>

          {/* Right Side  */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-2 text-sm">
            <div className="flex flex-col">
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="/About" className="hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/Career" className="hover:text-gray-900">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/Contact" className="hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col hidden md:block">
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="/Career" className="hover:text-gray-900">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="/About" className="hover:text-gray-900">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/About" className="hover:text-gray-900">
                    Leadership
                  </a>
                </li>
              </ul>
            </div>
          </div>


          <hr />
        </div>
        <hr />
        <div className="mt-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-gray-600 text-sm">
            Copyright © 2024 A.K. Enterprises All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-gray-600 text-sm">
            <a href="/TnC" className="hover:text-gray-900">
              Terms & Conditions
            </a>
            <a href="/Privacy-Policy" className="hover:text-gray-900">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
