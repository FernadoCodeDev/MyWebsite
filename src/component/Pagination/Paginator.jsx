import { useState } from "react";

import FrontEnd from "../../assets/svg/FrontEnd";
import BackEnd from "../../assets/svg/BackEnd";
import Database from "../../assets/svg/Database";
import Learning from "../../assets/svg/Learning";
import Tools from "../../assets/svg/Tools";
import Development from "../../assets/svg/DevelopmentSVG";

const icons = [
  {
    icon: <FrontEnd />,
    label: "Front-End",
    color: "text-orange-600",
    Background: "bg-orange-100",
  },
  {
    icon: <BackEnd />,
    label: "Back-End",
    color: "text-sky-600",
    Background: "bg-sky-100",
  },
  {
    icon: <Database />,
    label: "Base de datos",
    color: "text-emerald-600",
    Background: "bg-emerald-100",
  },
  {
    icon: <Learning />,
    label: "Aprendiendo",
    color: "text-yellow-600",
    Background: "bg-yellow-100",
  },
  {
    icon: <Tools />,
    label: "Herramientas",
    color: "text-teal-600",
    Background: "bg-teal-100",
  },
  {
    icon: <Development />,
    label: "Prácticas de Desarrollo",
    color: "text-beige-800",
    Background: "bg-beige-100",
  },
];

const Paginator = ({ pages }) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div id="Paginator" className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 w-full max-w-[80rem] mx-auto p-2 bg-white dark:bg-neutral-800 rounded-xl shadow-lg  hover:shadow-xl transition-all duration-300">
        {icons.map((item, index) => {
          const isActive = currentStep === index + 1;
          const iconColor = isActive
            ? item.color
            : "text-black dark:text-white";

          const hoverColor = `group-hover:${item.color}`;

          return (
            <div key={index} className="relative px-2 cursor-pointer group">
              <div
                onClick={() => setCurrentStep(index + 1)}
                className={`flex h-auto w-10 md:w-20 mx-auto items-center justify-center rounded-lg p-1 transition-colors duration-300 ${
                  isActive ? item.Background : "hover:bg-gray-50 dark:hover:bg-neutral-700"
                } ${iconColor} ${hoverColor}`}
              >
                {item.icon}
              </div>
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-center scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out origin-bottom bg-white dark:bg-neutral-700 text-xs px-3 py-1.5 rounded-lg shadow-lg border border-gray-200 before:absolute before:-bottom-[5px] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-t-white z-20">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="w-full mt-4">
        {pages.map((PageComponent, index) => (
          <div
            key={index}
            className={currentStep === index + 1 ? "block" : "hidden"}
          >
            <PageComponent />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paginator;
