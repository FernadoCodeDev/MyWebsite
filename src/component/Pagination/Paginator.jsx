import { useState } from "react";

const sectionColors = [
  "orange-600",
  "sky-950",
  "emerald-700",
  "amber-400",
  "slate-800",
  "amber-900",
];

const Paginator = ({ pages }) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div id="Paginator" className="flex flex-col gap-4">
      <nav className="grid grid-cols-3 gap-3 m-auto md:grid-cols-6">
        {sectionColors.map((color, index) => (
          <button
            key={index}
            className={
              ` border-2 border-gray-500 hover:border-gray-600 bg-transparent rounded-full w-12 h-12 relative cursor-pointer transition-all duration-700 ease-out ` +
              (currentStep === index + 1 ? `border-${color}` : "border-gray-500")
            }
            type="button"
            onClick={() => setCurrentStep(index + 1)}
          >
            <span
              className={`absolute top-1/2 left-1/2 w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${
                currentStep === index + 1 ? ` bg-${color} ` : "bg-gray-500 hover:bg-gray-600"
              }`}
            ></span>
          </button>
        ))}
      </nav>

      <div>
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
