import { useEffect, useState } from "react";
import CV from "../../assets/svg/CV";
import CVES from "../../assets/cv/CV - Fernando Mejía Español.pdf";
import CVEN from "../../assets/cv/CV - Fernando Mejía English.pdf";

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
        onClick={toggleModal}
        className="relative flex items-center justify-start w-16 h-20 gap-2 p-2 pr-6 font-bold duration-700 bg-blue-600 rounded group hover:w-full hover:bg-blue-700 text-neutral-50 before:duration-700 before:hover:500 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45"
      >
        <CV />
        <span className="inline-flex px-1 text-lg transition-all duration-100 origin-center transform scale-x-0 border-l-2 opacity-0 md:text-xl group-hover:duration-300 group-hover:delay-500 group-hover:opacity-100 group-hover:scale-x-100">
          Descargar CV
        </span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30">
          <div className="w-full p-6 bg-white rounded-lg shadow-lg max-w-[60rem]">
            <h2 className="mb-4 text-xl font-bold">Elige el idioma</h2>
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
