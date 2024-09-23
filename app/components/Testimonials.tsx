"use client";
import { useState } from "react";
import PImage from "../assets/PImage.jpg";
interface Testimonial {
  name: string;
  title: string;
  quote: string;
}
import Image from "next/image";

const testimonials: Testimonial[] = [
  {
    name: "Anujay Goel",
    title: "CEO, Co-Founder, XYZ Inc.",
    quote:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
  },
  {
    name: "Stallone Fernandes",
    title: "Software Engineer, ABC Company",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
  },
  {
    name: "Arpit Namdev",
    title: "Marketing Manager, DEF Corp",
    quote:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
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
            <Image
              src={PImage}
              alt="P"
              className="w-20 h-20 rounded-full mx-auto object-cover"
            />
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
