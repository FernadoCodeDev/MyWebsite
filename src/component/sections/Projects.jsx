import React from "react";
import { useState, useEffect } from "react";
import useScrollAnimation from "../hooks/ScrollAnimation";
import GithubSVG from "../../assets/svg/Github2";
import WebSVG from "../../assets/svg/web";
import { ProjectsInfos } from "../ui/ProjectsModal";
import ProjectsModal from "../ui/ProjectsModal";

const Projects = () => {
  const isVisible = useScrollAnimation("second-section");

  const [isOpen, setIsOpen] = useState(false);
  const [SelectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
   <div
      className="w-full m-auto grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[80rem] transition-all duration-1000 ease-in"
     
      id="Project"
    >
      <h1 className="text-2xl font-bold text-center md:text-4xl md:col-span-2">
        Mis Proyectos
      </h1>
      <h3 className="text-xl font-bold text-center md:text-2xl md:col-span-2">
        Creando, Aprendiendo y Evolucionando
      </h3>

      {ProjectsInfos.map((project) => (
        <div
          key={project.id}
          onClick={() => handleClick(project)}
          className={`relative rounded-2xl bg-slate-100 dark:bg-neutral-800 flex flex-col p-2`}
        >
          <div
            className={`mt-10 h-auto rounded-l-2xl ${project.BackgroundDiv}  rounded-br-2xl rounded-bl-2xl relative flex flex-col`}
          >
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              className="absolute object-contain w-8 h-8 dark:invert -top-10 left-5"
            />

            {project.image1.includes(".mp4") ? (
              <video
                className="w-full h-auto p-4 rounded-2xl"
                loop
                autoPlay
                muted
                playsInline
              >
                <source src={project.image1} type="video/mp4" />
              </video>
            ) : (
              <img
                src={project.image1}
                alt={`${project.name} main`}
                className="w-full h-auto p-4 rounded-2xl"
              />
            )}

            <div
              className={`w-1/3 h-11 ${project.BackgroundDiv} z-10 rounded-2xl absolute transform -top-7 right-5 skew-x-[-40deg]`}
            ></div>
            <div
              className={`w-1/4 h-11 ${project.BackgroundDiv} z-10 rounded-tr-2xl absolute transform -top-7 right-0 `}
            >
              <div className="absolute flex flex-row justify-around w-full h-12 p-1">
                {project.web && (
                  <a
                    href={project.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8"
                  >
                    <WebSVG />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8"
                  >
                    <GithubSVG />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 p-2 mt-2">
            <h1 className="text-2xl font-extrabold text-center">
              {project.name}
            </h1>

            <div className="flex flex-col justify-center flex-1">
              <div className="text-center">
                <p className="text-sm md:text-base">{project.Paragraph}</p>
                {project.Paragraph2 && (
                  <p className="mt-2 text-sm md:text-base">
                    {project.Paragraph2}
                  </p>
                )}
              </div>

              <div className="w-full h-[1px] bg-black dark:bg-white my-4"></div>

              <div className="grid items-center justify-center grid-cols-4 gap-4 mx-auto">
                {project.icons.map((item, index) => (
                  <div
                    key={index}
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
      ))}
      <ProjectsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        Project={SelectedProject}
      />
    </div>
  );
};

export default Projects;
