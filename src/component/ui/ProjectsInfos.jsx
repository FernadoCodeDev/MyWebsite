import { useEffect, useState } from "react";
import GithubSVG from "../../assets/svg/Github2";
import WebSVG from "../../assets/svg/web";
import Close from "../../assets/svg/Close";
import SVGRect from "../../assets/svg/svgreact";
import SVGTailwind from "../../assets/svg/Tailwind";
import SVGastro from "../../assets/svg/astro";
import SVGts from "../../assets/svg/ts";
import SVGVite from "../../assets/svg/Vite";
import SVGJS from "../../assets/svg/js";
import SVGSass from "../../assets/svg/sass";
import SVGphp from "../../assets/svg/php";
import SVGmysql from "../../assets/svg/mysql";
import AIsvg from "../../assets/svg/AI";
import NodeSVG from "../../assets/svg/node";
import SqliteSVG from "../../assets/svg/sqlite";
import ExpressSVG from "../../assets/svg/Express";
import WordPress from "../../assets/svg/wordpressSVG";
import SVGLaravel from "../../assets/svg/laravel"
import SVGVue from "../../assets/svg/Vue";

import CodiGol4 from "../../assets/video/CódiGolClip.mp4";

import LandingMineVideo from "../../assets/video/LandingMineVideo.mp4";

{/* 
  The way to bring an image is different with Astro and React. 
  What is imported here is the React way, but in the Array you 
  can place the address to display the images. 
  
  */
}

export const ProjectsInfos = [

  {
    id: 1,
    name: "Cooktopia",
    Paragraph:
      "COOKTOPIA SHOP es un E-commerce especializado en artículos de cocina, desarrollado como parte de una prueba técnica con el objetivo de construir una tienda en línea funcional inspirada en la experiencia de WooCommerce.",

    web: "https://cooktopiashop.netlify.app/",
    github: "https://github.com/FernadoCodeDev/Cooktopia-Backend",
    image1: "/img/Cooktopia.webp",
    image2: "/img/Cooktopia2.webp",
    image3: "/img/Cooktopia3.webp",
    image34: "/img/Cooktopia4.webp",
    icons: [
      { icon: <SVGJS />, Background: "bg-yellow-500", textSvg: "JavaScript", isImage: false },
      { icon: <SVGRect />, Background: "bg-sky-500", textSvg: "React", isImage: false },
      { icon: <SVGTailwind />, Background: "bg-cyan-500", textSvg: "Tailwind", isImage: false },
      { icon: <SVGVite />, Background: "bg-violet-500", textSvg: "Vite", isImage: false },
      { icon: <SVGphp />, Background: "bg-indigo-500", textSvg: "PHP", isImage: false },
      { icon: <SVGLaravel />, Background: "bg-red-500", textSvg: "Laravel", isImage: false },
      { icon: <SVGmysql />, Background: "bg-orange-500", textSvg: "MySQL", isImage: false },
      { icon: "/img/MVC.webp", Background: "bg-slate-800", textSvg: "MVC (Model-View-Controller)", isImage: true }

    ],
  },

  {
    id: 2,
    name: "Survey Container",
    Paragraph:
      "Survey Container es una dependencia NPM creada como ejercicio de una prueba técnica, cuyo objetivo era desarrollar un sistema completo de encuestas internas. La solución incluye un SDK reutilizable que facilita la integración de encuestas en distintas aplicaciones, junto con las funciones necesarias para gestionar preguntas, recopilar respuestas y mostrar métricas de manera clara.",
    Paragraph2:
      "Además del desarrollo del paquete, se creó una pequeña demo interactiva para probar su funcionamiento y detectar posibles mejoras, así como una página en WordPress utilizada como documentación y presentación del proyecto.",
    Paragraph3:
      "Ideal para empresas, equipos de desarrollo o plataformas que necesiten integrar encuestas internas de forma rápida y personalizable, manteniendo una estructura clara y preparada para escalar.",

    web: "https://surveycontainer.wordpress.com/",
    github: "https://github.com/FernadoCodeDev/demo-survey-container",
    image1: "/img/SurveyContainer.webp",
    image2: "/img/SurveyContainer1.webp",
    image3: "/img/SurveyContainer2.webp",
    icons: [
      { icon: <SVGts />, Background: "bg-blue-500", textSvg: "TypeScript", isImage: false },
      { icon: <SVGRect />, Background: "bg-sky-500", textSvg: "React", isImage: false },
      { icon: <NodeSVG />, Background: "bg-lime-500", textSvg: "Node", isImage: false },
      { icon: <ExpressSVG />, Background: "bg-neutral-800", textSvg: "Express", isImage: false },
      { icon: <SqliteSVG />, Background: "bg-sky-800", textSvg: "SQLite", isImage: false },
      { icon: <WordPress />, Background: "bg-sky-500", textSvg: "WordPress", isImage: false }

    ],
  },

  {
    id: 3,
    name: "StarIA",
    Paragraph:
      "Agente conversacional impulsado por IA, diseñado con la API de OpenAI. Una plataforma visual y funcional para configurar agentes de inteligencia artificial conversacional.",
    Paragraph2:
      "Ideal para equipos, negocios o profesionales que buscan integrar un agente conversacional en sus plataformas.",

    web: "https://staria.netlify.app/",
    github: "https://github.com/FernadoCodeDev/StarIA",
    image1: "/img/StarIA.webp",
    image2: "/img/StarIA3.webp",
    image3: "/img/StarIA4.webp",
    icons: [
      { icon: <SVGastro />, Background: "bg-orange-500", textSvg: "Astro", isImage: false },
      { icon: <SVGRect />, Background: "bg-sky-500", textSvg: "React", isImage: false },
      { icon: <SVGts />, Background: "bg-blue-500", textSvg: "TypeScript", isImage: false },
      { icon: <SVGTailwind />, Background: "bg-cyan-500", textSvg: "Tailwind", isImage: false },
      { icon: <AIsvg />, Background: "bg-emerald-500", textSvg: "API-DE-OPENAI", isImage: false }
    ],
  },

  {
    id: 4,
    name: "CódiGol",
    Paragraph:
      "Videojuego web para aprender Tailwind CSS enfrentando partidos de fútbol. En cada encuentro, debes aplicar un nuevo método de Tailwind para anotar goles. Ideal para quienes quieren aprender y mejorar en Tailwind CSS de forma práctica y entretenida.",
    Paragraph2:
      "Proyecto desarrollado y destacado en la Hackathon de MiduDev 2025.",
    web: "https://codigol-demo.netlify.app/",
    github: "https://github.com/FernadoCodeDev/CodiGol-Demo",
    image1: "/img/CodiGolLogo.webp",
    image2: "/img/CodiGol2.webp",
    image3: "/img/CodiGol3.webp",
    image4: CodiGol4,
    icons: [
      { icon: <SVGJS />, Background: "bg-yellow-500", textSvg: "JavaScript", isImage: false },
      { icon: <SVGRect />, Background: "bg-sky-500", textSvg: "React", isImage: false },
      { icon: <SVGTailwind />, Background: "bg-cyan-500", textSvg: "Tailwind", isImage: false },
      { icon: "/img/Clerk.webp", Background: "bg-purple-500", textSvg: "Clerk", isImage: true },
    ],
  },
  {
    id: 5,
    name: "Landing Mine",
    Paragraph:
      "Catálogo de 19 landing pages con temáticas variadas, diseñado para mostrar interfaces modernas y adaptadas a distintos tipos de negocio.",
    Paragraph2:
      "Ideal para reclutadores o clientes que buscan ver ejemplos reales de diseño profesional aplicado a distintos sectores.",
    web: "https://landingmine.netlify.app/",
    github: "https://github.com/FernadoCodeDev/LandingMine",
    image1: LandingMineVideo,
    icons: [
      { icon: <SVGJS />, Background: "bg-yellow-500", textSvg: "JavaScript", isImage: false },
      { icon: <SVGRect />, Background: "bg-sky-500", textSvg: "React", isImage: false },
      { icon: <SVGTailwind />, Background: "bg-cyan-500", textSvg: "Tailwind", isImage: false },
      { icon: <SVGVite />, Background: "bg-violet-500", textSvg: "Vite", isImage: false },
    ],
  },

  {
    id: 6,
    name: "Cosmic Pizza",
    Paragraph:
      "Plataforma web con sistema de reservaciones, diseñada para una pizzería pero adaptable a cualquier negocio que requiera agendar espacios. Incluye funciones como gestión de menú, número de mesas, inicio de sesión y reservas en línea.",
    Paragraph2:
      "Ideal para negocios que buscan mejorar su eficiencia y ofrecer una experiencia más práctica a sus clientes.",
    github: "https://github.com/FernadoCodeDev/Cosmic-Pizza",
    image1: "/img/CosmicPizzaB.webp",
    image2: "/img/CosmicPizza2.webp",
    image3: "/img/CosmicPizza3.webp",
    image4: "/img/CosmicPizza4.webp",
    icons: [
      { icon: <SVGts />, Background: "bg-blue-500", textSvg: "TypeScript", isImage: false },
      { icon: <SVGVue />, Background: "bg-emerald-500", textSvg: "Vue", isImage: false },

   { icon: <SVGTailwind />, Background: "bg-cyan-500", textSvg: "Tailwind", isImage: false },
      { icon: <SVGVite />, Background: "bg-violet-500", textSvg: "Vite", isImage: false },
      { icon: <SVGphp />, Background: "bg-indigo-500", textSvg: "PHP", isImage: false },
      { icon: <SVGLaravel />, Background: "bg-red-500", textSvg: "Laravel", isImage: false },
      { icon: <SVGmysql />, Background: "bg-orange-500", textSvg: "MySQL", isImage: false },
      { icon: "/img/MVC.webp", Background: "bg-slate-800", textSvg: "MVC (Model-View-Controller)", isImage: true }
    ],
  },
  {
    id: 7,
    name: "Keys Homes",
    Paragraph:
      "Sitio web enfocado en bienes raíces en su fase inicial que busca una presencia digital funcional sin complicaciones. permitiendo mostrar propiedades, simular formularios de contacto y facilitar la comunicación directa con el cliente mediante canales como WhatsApp o redes sociales.",
    Paragraph2:
      "Ideal para emprendimientos que desean organizar su oferta y facilitar el contacto, sin necesidad de plataformas complejas.",
    web: "http://keyshome.atwebpages.com/",
    github: "https://github.com/FernadoCodeDev/KeysHomes",
    image1: "/img/KeysHomesB.webp",
    image2: "/img/KeysHomes2.webp",
    image3: "/img/KeysHomes3.webp",
    image4: "/img/KeysHomes4.webp",
    icons: [
      { icon: <SVGJS />, Background: "bg-yellow-500", textSvg: "JavaScript", isImage: false },
      { icon: <SVGSass />, Background: "bg-pink-500", textSvg: "Sass", isImage: false },
      { icon: <SVGphp />, Background: "bg-indigo-500", textSvg: "PHP", isImage: false },
      { icon: <SVGmysql />, Background: "bg-orange-500", textSvg: "MySQL", isImage: false },
    ],
  },

];