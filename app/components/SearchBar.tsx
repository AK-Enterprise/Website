"use client";

import React from "react";

interface Props {
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="rounded-full border border-gray-300 p-2 flex items-center">
      <input
        className="flex-1 ml-2 px-3 py-1 focus:outline-none focus:ring focus:ring-blue-300 rounded-md"
        type="text"
        placeholder="Job title or keyword"
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="ml-2 flex justify-center items-center">
        <svg
          width="43"
          height="43"
          viewBox="0 0 4 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.57002"
            y1="42.2349"
            x2="1.57002"
            y2="0.176239"
            stroke="#E0E0E0"
            strokeWidth="3.1544"
          />
        </svg>

        <svg
          width="25"
          height="25"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.8331 14.4017C28.8331 20.5955 17.6175 31.2251 17.6175 31.2251C17.6175 31.2251 6.40186 20.5955 6.40186 14.4017C6.40186 11.4271 7.5835 8.57436 9.68684 6.47102C11.7902 4.36768 14.6429 3.18604 17.6175 3.18604C20.5921 3.18604 23.4448 4.36768 25.5481 6.47102C27.6515 8.57436 28.8331 11.4271 28.8331 14.4017V14.4017Z"
            stroke="#6A6A6A"
            strokeWidth="3.1544"
          />
          <path
            d="M17.6178 15.8037C17.9896 15.8037 18.3462 15.656 18.6091 15.393C18.872 15.1301 19.0197 14.7735 19.0197 14.4017C19.0197 14.0299 18.872 13.6733 18.6091 13.4104C18.3462 13.1475 17.9896 12.9998 17.6178 12.9998C17.246 12.9998 16.8894 13.1475 16.6264 13.4104C16.3635 13.6733 16.2158 14.0299 16.2158 14.4017C16.2158 14.7735 16.3635 15.1301 16.6264 15.393C16.8894 15.656 17.246 15.8037 17.6178 15.8037Z"
            fill="white"
            stroke="#6A6A6A"
            strokeWidth="3.1544"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="ml-1">Noida, India</p>
      </div>
      <button className="ml-4 rounded-full bg-gray-500 px-4 py-1 text-white hover:bg-gray-600">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
