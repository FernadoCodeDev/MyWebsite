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
        className={`m-auto grid grid-cols-1 gap-4 max-w-[80rem] transition-all duration-1000 ease-in ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-2xl font-bold text-center md:text-4xl">Lorem</h1>

        <h3 className="text-xl font-bold text-center md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>

        <div id="Paginator" className="w-full ">
          <nav class="grid grid-cols-3 md:grid-cols-6">
            <button class="CurrentStage" type="button" data-page="1">
              1
            </button>
            <button type="button" data-page="2">
              2
            </button>
            <button type="button" data-page="3">
              3
            </button>
            <button type="button" data-page="4">
              4
            </button>
            <button type="button" data-page="5">
              5
            </button>
            <button type="button" data-page="6">
              6
            </button>
          </nav>

          <Page1 />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
