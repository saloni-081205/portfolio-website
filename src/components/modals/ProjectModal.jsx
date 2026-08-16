// ProjectModal.jsx
import { useEffect, useState } from "react";

import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  FolderGit2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!project) return;

    setActiveImage(0);

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  const gallery = project.gallery?.length
    ? project.gallery
    : [project.image];

  const nextImage = () => {
    setActiveImage((current) =>
      current === gallery.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? gallery.length - 1 : current - 1
    );
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-violet-950/70 p-4 backdrop-blur-md"
      onMouseDown={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-violet-500/30 bg-white/95 shadow-[0_0_60px_rgba(139,92,246,0.2)] backdrop-blur-sm dark:border-violet-500/30 dark:bg-gray-950/95 dark:shadow-[0_0_60px_rgba(139,92,246,0.15)]"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-violet-600/80 text-white transition-all duration-300 hover:scale-110 hover:bg-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
        >
          <X size={20} />
        </button>

        <div className="grid lg:grid-cols-2">

          {/* IMAGE SECTION */}
          <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 p-5 dark:from-violet-500/5 dark:to-purple-500/5">

            {/* Main image */}
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gray-200 shadow-[0_0_30px_rgba(139,92,246,0.1)] dark:bg-gray-800">

              <img
                src={gallery[activeImage]}
                alt={`${project.title} screenshot ${activeImage + 1}`}
                className="h-full w-full object-contain transition-all duration-300 hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]"
              />

              {/* Previous */}
              {gallery.length > 1 && (
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-violet-600/80 text-white transition-all duration-300 hover:scale-110 hover:bg-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                >
                  <ChevronLeft size={22} />
                </button>
              )}

              {/* Next */}
              {gallery.length > 1 && (
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-violet-600/80 text-white transition-all duration-300 hover:scale-110 hover:bg-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                >
                  <ChevronRight size={22} />
                </button>
              )}

              {/* Counter */}
              {gallery.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {activeImage + 1} / {gallery.length}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {gallery.map((image, index) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-video overflow-hidden rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                      activeImage === index
                        ? "border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                        : "border-transparent opacity-70 hover:opacity-100 hover:border-violet-500/50"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DETAILS SECTION */}
          <div className="p-7 sm:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 text-violet-600 shadow-[0_0_20px_rgba(139,92,246,0.1)] dark:from-violet-500/20 dark:to-purple-500/20 dark:text-violet-400">
              <FolderGit2 size={26} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              {project.category}
            </p>

            <h2
              id="project-modal-title"
              className="mt-2 text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent sm:text-3xl dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400"
            >
              {project.title}
            </h2>

            {/* Description */}
            <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            {/* Features */}
            <div className="mt-7">

              <h3 className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
                Key Features
              </h3>

              <ul className="mt-4 space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm text-gray-600 transition-colors duration-300 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mt-7">

              <h3 className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
                Technologies
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-600 transition-all duration-300 hover:scale-105 hover:bg-violet-500/20 hover:shadow-[0_0_10px_rgba(139,92,246,0.15)] dark:bg-violet-500/10 dark:text-violet-400 dark:hover:bg-violet-500/20"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3">

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                >
                  <FaGithub size={17} />
                  GitHub
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(192,38,211,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(192,38,211,0.4)]"
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;