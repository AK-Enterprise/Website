"use client";
import { useState } from "react";
interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}
// import Image from "next/image";
const testimonials: Testimonial[] = [
  {
    name: "Anil Kumar",
    title: "Director Of Dhammatek Limited",
    quote:
      "A.K. Enterprises has been an invaluable partner, expertly managing everything for Dhammatek Limited—from product sourcing to marketplace sales and all our digital marketing needs. Their dedication and expertise have significantly contributed to our success.",
    image: "/assets/PImage.jpg",
  },
  {
    name: "Ritu Kumar",
    title: "Director Of Blisswood Limited",
    quote:
      "A.K. Enterprises has been essential to Blisswood Limited, handling everything from manufacturing to product sourcing, marketplace sales, and digital marketing. Their comprehensive support has been a key factor in our growth and success.",
    image: "/assets/PImage.jpg",
  },
  {
    name: "Pravin Shukla",
    title: "Sr. Manager Of Dhammatek Limited",
    quote:
      "A.K. Enterprises has been a vital partner for Dhammatek Limited, seamlessly managing everything from product sourcing and manufacturing to marketplace sales and digital marketing. Their unwavering expertise and dedication have played a crucial role in our ongoing success.",
    image: "",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(
      (currentTestimonial - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  return (
    <div className="flex justify-center items-center flex-col mx-auto px-4 py-16 max-w-[900px] m-auto h-[70vh]">
      <h2 className="text-3xl font-semibold text-center text-[#C9B18F] drop-shadow-lg">
        Testimonials
      </h2>
      <div className="flex justify-between items-center">
        <button
          className="rounded-full bg-gray-200 p-2 hover:bg-black hover:text-white focus:outline-none"
          onClick={handlePrevTestimonial}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-gray-700 text-center mb-4">
              {testimonials[currentTestimonial].quote}
            </p>
            {/* <Image
              src={testimonials[currentTestimonial].image}
              alt="Profile"
              width={20}
              height={20}
              className="rounded-full mx-auto object-cover"
            /> */}
            <h4 className="text-lg font-bold text-center">
              {testimonials[currentTestimonial].name}
            </h4>
            <p className="text-gray-600 text-center">
              {testimonials[currentTestimonial].title}
            </p>
          </div>
          <div className="mt-4 flex space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`inline-block w-1 h-1 rounded-full ${
                  index === currentTestimonial ? "bg-slate-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <button
          className="rounded-full bg-gray-200 p-2 hover:bg-black hover:text-white focus:outline-none"
          onClick={handleNextTestimonial}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
