import React from "react";
import useScrollAnimation from "../hooks/ScrollAnimation";
import Page1 from "../Pagination/page1";

const SecondSection = () => {
  const isVisible = useScrollAnimation("second-section");
  return (
    <div
      className="relative flex flex-col items-center min-h-screen gap-8 p-4 text-black bg-white lg:text-2xl dark:text-white dark:bg-neutral-900"
      id="second-section"
    >
      <div
        className={`m-auto w-full grid grid-cols-1 gap-4 max-w-[80rem] transition-all duration-1000 ease-in ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-2xl font-bold text-center md:text-4xl">Lorem</h1>

        <h3 className="text-xl font-bold text-center md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>

        <div id="Paginator" className="flex flex-col gap-4">
          <nav class="grid m-auto grid-cols-3 md:grid-cols-6 gap-3">
            <button
               className="
               border-2 border-gray-500 hover:border-gray-600 bg-transparent rounded-full w-12 h-12 relative cursor-pointer transition-all duration-700 ease-out
               before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-8 before:h-8 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-500 before:hover:bg-gray-600 before:transition-all before:duration-700 before:ease-out
               "
              type="button"
              data-page="1"
            ></button>
            <button
              className="
              border-2 border-gray-500 hover:border-gray-600 bg-transparent rounded-full w-12 h-12 relative cursor-pointer transition-all duration-700 ease-out
              before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-8 before:h-8 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-500 before:hover:bg-gray-600 before:transition-all before:duration-700 before:ease-out
              "
              type="button"
              d
              ata-page="2"
            ></button>
            <button
               className="
               border-2 border-gray-500 hover:border-gray-600 bg-transparent rounded-full w-12 h-12 relative cursor-pointer transition-all duration-700 ease-out
               before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-8 before:h-8 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-500 before:hover:bg-gray-600 before:transition-all before:duration-700 before:ease-out
               "
              type="button"
              data-page="3"
            ></button>
            <button
              className="
              border-2 border-gray-500 hover:border-gray-600 bg-transparent rounded-full w-12 h-12 relative cursor-pointer transition-all duration-700 ease-out
              before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-8 before:h-8 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-500 before:hover:bg-gray-600 before:transition-all before:duration-700 before:ease-out
              "
              type="button"
              data-page="4"
            ></button>
            <button
               className="
               border-2 border-gray-500 hover:border-gray-600 bg-transparent rounded-full w-12 h-12 relative cursor-pointer transition-all duration-700 ease-out
               before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-8 before:h-8 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-500 before:hover:bg-gray-600 before:transition-all before:duration-700 before:ease-out
               "
              type="button"
              data-page="5"
            ></button>
            <button
              className="
              border-2 border-gray-500 hover:border-gray-600 bg-transparent rounded-full w-12 h-12 relative cursor-pointer transition-all duration-700 ease-out
              before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-8 before:h-8 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-500 before:hover:bg-gray-600 before:transition-all before:duration-700 before:ease-out
              "
              type="button"
              data-page="6"
            ></button>
          </nav>

          <Page1 />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
