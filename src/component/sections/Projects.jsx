import { useState } from "react";
import { ProjectsInfos } from "../ui/ProjectsInfos";
import Web from "../../assets/svg/web";
import GitHub2 from "../../assets/svg/Github2";

export default function ProjectsDetails() {

  const [currentImages, setCurrentImages] = useState(
    ProjectsInfos.map(() => 0)
  );

  const handlePrev = (projectIndex, imagesLength) => {
    setCurrentImages((prev) =>
      prev.map((imgIndex, i) =>
        i === projectIndex
          ? imgIndex === 0
            ? imagesLength - 1
            : imgIndex - 1
          : imgIndex
      )
    );
  };

  const handleNext = (projectIndex, imagesLength) => {
    setCurrentImages((prev) =>
      prev.map((imgIndex, i) =>
        i === projectIndex
          ? imgIndex === imagesLength - 1
            ? 0
            : imgIndex + 1
          : imgIndex
      )
    );
  };

  const isVideo = (src) => typeof src === "string" && src.match(/\.(mp4|webm|ogg)$/);

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      {ProjectsInfos.map((project, index) => {
        const mediaItems = [
          project.image1,
          project.image2,
          project.image3,
          project.image4,
        ].filter(Boolean);

        const currentMedia = mediaItems[currentImages[index]];

        return (
          <details key={project.id} className="">
            <summary className="font-bold cursor-pointer">{project.name}</summary>

            <div className="flex flex-col gap-2 pb-4 mt-2 border-b-2 border-gray-500">
              {/* Links */}
              <div className="flex flex-row items-center justify-between">
                <h1 className="text-xl font-bold">{project.name}</h1>
                <div className="flex flex-row gap-2">
                  {project.web && (
                    <a href={project.web} target="_blank">
                      <Web className="w-6 h-6" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank">
                      <GitHub2 className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              {/* Image or video with buttons */}
              <div className="relative flex justify-center w-full">
                {isVideo(currentMedia) ? (
                  <video src={currentMedia} controls className="w-full rounded-lg" />
                ) : (
                  <img src={currentMedia} alt={project.name} className="w-full rounded-lg" />
                )}

                {mediaItems.length > 1 && (
                  <>
                    <button
                      onClick={() => handlePrev(index, mediaItems.length)}
                      className="absolute left-0 px-2 py-1 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded top-1/2"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => handleNext(index, mediaItems.length)}
                      className="absolute right-0 px-2 py-1 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded top-1/2"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              <p className="text-base">{project.Paragraph}</p>
              <p className="text-base">{project.Paragraph2}</p>
              <p className="text-base">{project.Paragraph3}</p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1 mt-2">
                {project.icons?.map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-row items-center p-2 gap-2  text-white ${item.Background}`}
                  >
                    <div className="flex items-center justify-center w-8 h-auto">
                      {item.isImage ? (
                        <img src={item.icon} alt={item.textSvg} className="object-contain w-6 h-auto invert" />
                      ) : (
                        item.icon
                      )}
                    </div>
                    <span className="text-sm font-bold">{item.textSvg}</span>
                  </div>
                ))}
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}
