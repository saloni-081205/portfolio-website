// Projects.jsx
import { useState } from "react";

import {
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

import SectionTitle from "./ui/SectionTitle";
import ProjectModal from "./modals/ProjectModal";

import { projects } from "../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="relative bg-gray-50 py-24 overflow-hidden dark:bg-gray-900/50"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
          <div className="absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-fuchsia-500/5 blur-3xl dark:bg-fuchsia-500/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <SectionTitle
            eyebrow="My Projects"
            title="My Projects"
            description="A selection of projects that demonstrate my development skills, problem-solving ability, and interest in building practical software."
          />

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-violet-500/20 bg-white/80 backdrop-blur-sm shadow-[0_0_20px_rgba(139,92,246,0.05)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] active:-translate-y-2 active:scale-[1.02] active:border-violet-500/40 active:shadow-[0_0_40px_rgba(139,92,246,0.15)] focus:-translate-y-2 focus:scale-[1.02] focus:border-violet-500/40 focus:shadow-[0_0_40px_rgba(139,92,246,0.15)] dark:border-violet-500/20 dark:bg-gray-950/80 dark:hover:border-violet-500/40 dark:hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] dark:active:border-violet-500/40 dark:active:shadow-[0_0_40px_rgba(139,92,246,0.15)] dark:focus:border-violet-500/40 dark:focus:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
              >
                {/* Glow effect on hover/active/focus */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500 group-focus:opacity-100 group-focus:from-violet-500/10 group-focus:via-purple-500/10 group-focus:to-fuchsia-500/10" />

                {/* Project Image */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="relative block aspect-video w-full overflow-hidden bg-gray-100 text-left dark:bg-gray-800"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-active:scale-110 group-focus:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-violet-950/0 via-violet-950/0 to-violet-950/0 transition-all duration-500 group-hover:from-violet-950/0 group-hover:via-violet-950/20 group-hover:to-violet-950/60 group-active:from-violet-950/0 group-active:via-violet-950/20 group-active:to-violet-950/60 group-focus:from-violet-950/0 group-focus:via-violet-950/20 group-focus:to-violet-950/60">

                    <span className="flex translate-y-4 items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white opacity-0 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] group-active:translate-y-0 group-active:opacity-100 group-active:shadow-[0_0_30px_rgba(139,92,246,0.5)] group-focus:translate-y-0 group-focus:opacity-100 group-focus:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                      View Details
                      <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45 group-focus:rotate-45" />
                    </span>

                  </div>
                </button>

                {/* Content */}
                <div className="relative p-6">

                  {/* Category */}
                  <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400">
                    <FolderGit2 size={17} />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 line-clamp-2 text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 transition-colors duration-300 group-hover:text-gray-700 group-active:text-gray-700 group-focus:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300 dark:group-active:text-gray-300 dark:group-focus:text-gray-300">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-600 transition-all duration-300 group-hover:bg-violet-500/20 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.1)] group-active:bg-violet-500/20 group-active:shadow-[0_0_10px_rgba(139,92,246,0.1)] group-focus:bg-violet-500/20 group-focus:shadow-[0_0_10px_rgba(139,92,246,0.1)] dark:bg-violet-500/10 dark:text-violet-400 dark:group-hover:bg-violet-500/20 dark:group-active:bg-violet-500/20 dark:group-focus:bg-violet-500/20"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* GitHub & Live Demo Links */}
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        aria-label={`${project.title} GitHub repository`}
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] active:scale-105 active:shadow-[0_0_30px_rgba(139,92,246,0.4)] focus:scale-105 focus:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                      >
                        <FaGithub size={16} />
                        GitHub
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        aria-label={`${project.title} live demo`}
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(192,38,211,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(192,38,211,0.4)] active:scale-105 active:shadow-[0_0_30px_rgba(192,38,211,0.4)] focus:scale-105 focus:shadow-[0_0_30px_rgba(192,38,211,0.4)]"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>

                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;