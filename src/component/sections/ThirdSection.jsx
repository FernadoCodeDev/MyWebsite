import React from "react";
import useScrollAnimation from "../hooks/ScrollAnimation";
import Projects from "./Projects";

const ThirdSection = () => {
  const isVisible = useScrollAnimation("second-section");
  return (
    <div
      className="relative flex flex-col items-center h-auto gap-8 p-4 text-black bg-white  2xl:text-2xl dark:text-white dark:bg-neutral-900"
      id="second-section"
    >
      <Projects />
    </div>
  );
};

export default ThirdSection;
