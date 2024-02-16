import React from "react";

function SearchInput() {
  return (
    <div className="mt-10">
      <h2 className="text-center text-[20px] text-gray-400">
        Search for your next Car
      </h2>
      <div className="flex justify-center mt-5">
        <div className="flex bg-gray-200 p-2 px-5 gap-2 rounded-full border-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Location"
            className="p-2 outline-none bg-transparent"
          />
          <div className="border-l border-gray-600"></div>
          <input
            type="date"
            className="p-2 outline-none bg-transparent text-gray-500"
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-full">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
