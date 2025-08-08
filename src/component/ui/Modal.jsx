import { useEffect, useState } from "react";
import CVES from "../../assets/cv/CV - Fernando Mejía Español.pdf";
import CVEN from "../../assets/cv/CV - Fernando Mejía English.pdf";
import Cv from "../../assets/svg/CV";

const DownloadCVButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="relative">
  
      <button 
      className="flex flex-row gap-2 p-2 transition-all duration-700 ease-out bg-transparent rounded-lg cursor-pointer cursor hover:bg-slate-300 dark:hover:bg-slate-800"
       onClick={toggleModal}
      >
        <Cv />
        <p className="">CV</p>

      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40 p-4">
          <div className="w-full p-6 bg-white rounded-lg shadow-lg max-w-[50rem]">
            <h2 className="mb-4 text-xl font-bold text-gray-950">Elige el idioma</h2>
            <div className="flex justify-between gap-4">
              <a
                href={CVES}
                download
                className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Español
              </a>
              <a
                href={CVEN}
                download
                className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-lg hover:bg-green-700"
              >
                Inglés
              </a>
            </div>
            <button
              onClick={toggleModal}
              className="w-full px-4 py-2 mt-4 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadCVButton;
