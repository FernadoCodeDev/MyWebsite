import { useState } from "react";

const sectionColors = [
  "bg-orange-600", 
  "bg-sky-950", 
  "bg-emerald-700",
  "bg-amber-400", 
  "bg-slate-800", 
  "bg-amber-900", 
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
              `border-2 border-gray-500 hover:border-gray-600 bg-transparent rounded-full w-12 h-12 relative cursor-pointer transition-all duration-700 ease-out
               before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-8 before:h-8 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-500 before:hover:bg-gray-600 before:transition-all before:duration-700 before:ease-out` +
              (currentStep === index + 1 ? ` ${color} ` : "")
            }
            type="button"
            onClick={() => setCurrentStep(index + 1)}
          >
            
          </button>
        ))}
      </nav>

      <div>
        {pages.map((PageComponent, index) => (
          <div key={index} className={currentStep === index + 1 ? "block" : "hidden"}>
            <PageComponent />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paginator;
