import React from "react";
import useScrollAnimation from "../hooks/ScrollAnimation";
import Paginator from "../Pagination/Paginator";
import Page1 from "../Pagination/page1";
import Page2 from "../Pagination/page2";
import Page3 from "../Pagination/page3";
import Page4 from "../Pagination/page4";
import Page5 from "../Pagination/page5";
import Page6 from "../Pagination/page6";


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
        id="Skills"
      >
        <h1 className="text-2xl font-bold text-center md:text-4xl">Lorem</h1>

        <h3 className="text-xl font-bold text-center md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>

        <Paginator pages={[Page1, Page2, Page3, Page4, Page5, Page6]} />
      </div>
    </div>
  );
};

export default SecondSection;
