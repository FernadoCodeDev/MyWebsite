import React from "react";
import ImgFirstSection from "../../assets/img/ImgFirstSection.webp";
import useScrollAnimation from "../hooks/ScrollAnimation";

const FirstSection = () => {
  const isVisible = useScrollAnimation("second-section");
  return (
    <div
      id="second-section"
      className="relative flex flex-col items-center min-h-screen gap-8 p-4 text-black bg-white lg:text-2xl dark:text-white dark:bg-neutral-900"
    >
      <div
        className={`m-auto grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[80rem] transition-all duration-1000 ease-in ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        id="Me"
      >

        <div className="order-2 p-4 md:order-1">
          <img src={ImgFirstSection} alt="ImgFirstSection" />
        </div>
        <div className="flex flex-col justify-center order-1 gap-4 md:order-2">
          <h1 className="text-2xl font-bold text-center md:text-4xl md:text-start">
            Lorem
          </h1>
          <h1 className="text-xl font-bold text-center md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            fugit nihil hic suscipit beatae, fuga perspiciatis temporibus
            commodi possimus ullam nisi, impedit odio animi aut quaerat, esse
            fugiat aliquid tempora.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
