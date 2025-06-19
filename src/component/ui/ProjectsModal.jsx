import { useEffect, useState } from "react";
import GithubSVG from "../../assets/svg/Github2";
import WebSVG from "../../assets/svg/web";
import Close from "../../assets/svg/Close";
import SVGRect from "../../assets/svg/svgreact";
import SVGTailwind from "../../assets/svg/Tailwind";
import SVGVite from "../../assets/svg/Vite";
import SVGJS from "../../assets/svg/js";
import SVGSass from "../../assets/svg/sass";
import SVGphp from "../../assets/svg/php";
import SVGmysql from "../../assets/svg/mysql";
import MVC from "../../assets/img/MVC.webp";
import Clerk from "../../assets/img/Clerk.webp";

import CodiGolLogo from "../../assets/img/CódiGolLogo2.webp";
import CodiGol from "../../assets/img/CodiGolLogo.webp";
import CodiGol2 from "../../assets/img/CodiGol2.webp";
import CodiGol3 from "../../assets/img/CodiGol3.webp";
import CodiGol4 from "../../assets/video/CódiGolClip.mp4";

import LandingMine from "../../assets/img/LandingMine.webp";
import LandingMineVideo from "../../assets/video/LandingMineVideo.mp4";

import CosmicPizza from "../../assets/img/CosmicPizza.webp";
import CosmicPizzaB from "../../assets/img/CosmicPizzaB.webp";
import CosmicPizza2 from "../../assets/img/CosmicPizza2.webp";
import CosmicPizza3 from "../../assets/img/CosmicPizza3.webp";
import CosmicPizza4 from "../../assets/img/CosmicPizza4.webp";

import KeysHomes from "../../assets/img/KeysHomes.webp";
import KeysHomesB from "../../assets/img/KeysHomesB.webp";
import KeysHomes2 from "../../assets/img/KeysHomes2.webp";
import KeysHomes3 from "../../assets/img/KeysHomes3.webp";
import KeysHomes4 from "../../assets/img/KeysHomes4.webp";

export const ProjectsInfos = [
  {
    id: 1,
    name: "CódiGol",
    Paragraph:
      "Videojuego web para aprender Tailwind CSS enfrentando partidos de fútbol. En cada encuentro, debes aplicar un nuevo método de Tailwind para anotar goles. Ideal para quienes quieren aprender y mejorar en Tailwind CSS de forma práctica y entretenida.",
    Paragraph2:
      "Proyecto desarrollado y destacado en la Hackathon de MiduDev 2025.",

    BackgroundDiv: "bg-neutral-900",
    web: "https://codigol-demo.netlify.app/",
    github: "https://github.com/FernadoCodeDev/CodiGol-Demo",
    logo: CodiGolLogo,
    image1: CodiGol,
    image2: CodiGol2,
    image3: CodiGol3,
    image4: CodiGol4,
    icons: [
      { icon: <SVGJS />, Background: "bg-yellow-300", isImage: false },
      { icon: <SVGRect />, Background: "bg-sky-300", isImage: false },
      { icon: <SVGTailwind />, Background: "bg-cyan-300", isImage: false },
      { icon: Clerk, Background: "bg-purple-300", isImage: true },
    ],
  },
  {
    id: 2,
    name: "Landing Mine",
    Paragraph:
      "Catálogo de 19 landing pages con temáticas variadas, diseñado para mostrar interfaces modernas y adaptadas a distintos tipos de negocio.",
    Paragraph2:
      "Ideal para reclutadores o clientes que buscan ver ejemplos reales de diseño profesional aplicado a distintos sectores.",
    web: "https://landingmine.netlify.app/",
    github: "https://github.com/FernadoCodeDev/LandingMine",
    logo: LandingMine,
    image1: LandingMineVideo,
    BackgroundDiv: "bg-blue-950",
    icons: [
      { icon: <SVGJS />, Background: "bg-yellow-300", isImage: false },
      { icon: <SVGRect />, Background: "bg-sky-300", isImage: false },
      { icon: <SVGTailwind />, Background: "bg-cyan-300", isImage: false },
      { icon: <SVGVite />, Background: "bg-violet-300", isImage: false },
    ],
  },
  {
    id: 3,
    name: "Cosmic Pizza",
    Paragraph:
      "Plataforma web con sistema de reservaciones, diseñada inicialmente para una pizzería pero adaptable a cualquier negocio que requiera agendar espacios. Incluye funciones como gestión de menú, número de mesas, inicio de sesión y reservas en línea.",
    Paragraph2:
      "Ideal para negocios que buscan mejorar su eficiencia y ofrecer una experiencia más práctica a sus clientes.",
    github: "https://github.com/FernadoCodeDev/Cosmic-Pizza",
    logo: CosmicPizza,
    image1: CosmicPizzaB,
    image2: CosmicPizza2,
    image3: CosmicPizza3,
    image4: CosmicPizza4,
    BackgroundDiv: "bg-[#090f1f]",
    icons: [
      { icon: <SVGJS />, Background: "bg-yellow-300", isImage: false },
      { icon: <SVGphp />, Background: "bg-indigo-300", isImage: false },
      { icon: <SVGmysql />, Background: "bg-orange-300", isImage: false },
      { icon: MVC, Background: "bg-slate-800", isImage: true },
    ],
  },
  {
    id: 4,
    name: "Keys Homes",
    Paragraph:
      "Sitio web enfocado en bienes raíces en su fase inicial que busca una presencia digital funcional sin complicaciones. permitiendo mostrar propiedades, simular formularios de contacto y facilitar la comunicación directa con el cliente mediante canales como WhatsApp o redes sociales.",
    Paragraph2:
      "Ideal para emprendimientos que desean organizar su oferta y facilitar el contacto, sin necesidad de plataformas complejas.",
    BackgroundDiv: "bg-[#0f2925] ",
    web: "http://keyshome.atwebpages.com/",
    github: "https://github.com/FernadoCodeDev/KeysHomes",
    logo: KeysHomes,
    image1: KeysHomesB,
    image2: KeysHomes2,
    image3: KeysHomes3,
    image4: KeysHomes4,
    icons: [
      { icon: <SVGJS />, Background: "bg-yellow-300", isImage: false },
      { icon: <SVGSass />, Background: "bg-pink-300", isImage: false },
      { icon: <SVGphp />, Background: "bg-indigo-300", isImage: false },
      { icon: <SVGmysql />, Background: "bg-orange-300", isImage: false },
    ],
  },
];
export default function ProjectsModal({ isOpen, onClose, Project }) {
  if (!isOpen || !Project) return null;

  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaItems = [
    Project.image1,
    Project.image2,
    Project.image3,
    Project.image4,
  ].filter(Boolean);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  const isVideo = (src) => {
    return typeof src === "string" && src.match(/\.(mp4|webm|ogg)$/);
  };

  const currentMedia = mediaItems[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-black dark:text-white bg-black backdrop-blur-[4px] bg-opacity-60">
      <div className="relative p-2 m-auto overflow-hidden max-w-[70rem] rounded-2xl bg-slate-100 dark:bg-neutral-900">
        <button
          onClick={onClose}
          className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 top-4 right-4"
        >
          <Close />
        </button>

        <div className="relative z-20 grid grid-cols-1 gap-2 px-4 mt-20 md:grid-cols-2">
          <div className="relative flex items-center justify-center w-full h-auto ">
            {isVideo(currentMedia) ? (
              <video
                src={currentMedia}
                controls
                className="w-full h-auto rounded-xl"
              />
            ) : (
              <img
                src={currentMedia}
                alt="preview"
                className="w-full h-auto rounded-xl"
              />
            )}

            <button
              onClick={handlePrev}
              className="absolute flex items-center justify-center w-8 h-12 p-2 text-xl font-bold text-white bg-black bg-opacity-50 rounded-full left-4"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute flex items-center justify-center w-8 h-12 p-2 text-xl font-bold text-white bg-black bg-opacity-50 rounded-full right-4"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <div className="grid items-center grid-cols-1 gap-2">
              <h1 className="text-xl font-bold md:text-2xl">{Project.name}</h1>
              <p className="text-sm md:text-base m-auto max-w-[40rem]">
                {Project.Paragraph}
              </p>
              <p className="text-sm md:text-base m-auto max-w-[40rem]">
                {Project.Paragraph2}
              </p>
            </div>

            <div className="md:hidden w-full h-[1px] bg-black dark:bg-white my-2"></div>

            <div className="grid items-center grid-cols-1 gap-4 m-auto md:hidden">
              <div className="grid items-center w-full grid-cols-4 gap-4 mx-auto">
                {Project.icons?.map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center w-12 h-12 p-2 ${item.Background} rounded-full md:w-20 md:h-20 md:p-4`}
                  >
                    {item.isImage ? (
                      <img
                        src={item.icon}
                        alt="Icono"
                        className="object-contain w-8 h-8 md:w-20 md:h-20 invert"
                      />
                    ) : (
                      item.icon
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block md:col-span-2 w-full h-[1px] bg-black dark:bg-white my-2"></div>

          <div className="items-center hidden grid-cols-1 gap-4 m-auto md:col-span-2 md:grid">
            <div className="grid items-center w-full grid-cols-4 gap-4 mx-auto">
              {Project.icons?.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center w-12 h-12 p-2 ${item.Background} rounded-full md:w-20 md:h-20 md:p-4`}
                >
                  {item.isImage ? (
                    <img
                      src={item.icon}
                      alt="Icono"
                      className="object-contain w-8 h-8 md:w-20 md:h-20 invert"
                    />
                  ) : (
                    item.icon
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
